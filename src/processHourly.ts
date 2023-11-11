import fs = require('fs')
import readline = require('readline')
import {EOL} from 'os'

type Filepath = string
type DataSeries = { [key: string]: number; }
type DataForChart = {
  x: Array<string>,
  y: Array<number>,
  misery: Array<number>,
  '24_hour_avg_pollen': number,
  '24_hour_avg_misery': number,
  sort_value: number
}
type DataCollection = { [allergen: string]: DataForChart }

type DataSeries3 = { [key: string]: [number, number]; }

async function processHourlyJson(filename: Filepath) {
  console.log(`INFO: Opening ${filename}`);


  let allergenData: DataCollection = {};

  fs.readFile(filename, "utf8", (error, data) => {
    if (error) {
      console.log('ERROR', error);
      return;
    }

    allergenData = JSON.parse(data);

    // console.log(allergenData);


    for (const allergenProp in allergenData)
    {
      console.log(`INFO: Processing ${allergenProp} data to file`)
      const filename = `allergenData/hourly.${allergenProp}.json`;
      const readFilename = filename;

      const newData = allergenData[allergenProp];
      // want to "noramalize" this into "rows"
      console.log('VERBOSE: Input Data Section', newData);

      // The last value in this array is THIS HOUR, going back approx 24 hours?
      const hourVals = newData.x;
      const countsVals = newData.y;
      const miseryVals = newData.misery;


      // zip these three arrays... then be able to merge them into the new object??
      if (hourVals.length !== countsVals.length && hourVals.length !== miseryVals.length) {
        console.log('ERROR', `Data lengths don't match x:${hourVals.length}, y:${countsVals.length}, misery:${miseryVals.length}`);
        return;
      }
      //const zipped: Array<[string, number, number]> = [];
      const zipped: DataSeries3 = {};
      for (let index = 0; index < hourVals.length; ++index) {
        zipped[addDateToTimeLabel(hourVals[index])] = [countsVals[index], miseryVals[index]];
      }

      const normalizedData = {
        data: zipped,
        daily_avg_pollen: newData['24_hour_avg_pollen'],
        daily_avg_misery: newData['24_hour_avg_misery'],
        sort_value: newData.sort_value
      }
      
      console.log('VERBOSE: Normalized Data Section', normalizedData);

      console.log("############");
      





      console.log(`INFO: Reading previous data ${readFilename}`)
      fs.readFile(readFilename, (err, data) => {
        if(err) {
          console.log('ERROR', err);
          // fall through for empty data
        }

        // TODO consider parsing this as a Map?
        const previousData: any = (err) ? {} : JSON.parse(data.toString());


        // Combine valuesDictionary and previousData
        const combinedData: DataSeries = {...previousData, ...newData};

        fs.writeFile(filename, JSON.stringify(combinedData, null, 2), function(err) {
          if(err) console.log('error', err);
          console.log(`INFO: ${filename}: Wrote combined data ${Object.keys(combinedData).length} (${Object.keys(newData).length} new, ${Object.keys(previousData).length} existing)`)
        });
      });
    }

  });


  // TODO refactor this too
  // console.log('INFO: updating README.md hourly data')
  // updateReadme(allergenData);
}


function addDateToTimeLabel(hourLabel: string) {
  
  const now = new Date();

  const parseText = now.toLocaleDateString() + ' ' + hourLabel;
  const parsedDate = new Date(parseText);

  const offsetSecs = 360*60*1000;
  
  if (parsedDate > new Date(now.getTime() - offsetSecs)) {
    // if parsed date is more than right now, assume it was yesterday
    parsedDate.setDate(parsedDate.getDate() - 1);
  }
  return parsedDate.toISOString();

  return hourLabel;
}


function wrapWithInjectionSpot(label: string, str: string) {
  return `<!-- ${label} -->${str}<!-- END ${label} -->`;
}
function updateReadme(allergenData: DataCollection) {
  const filename = 'README.md';
  const injectionLabel = 'INJECT HOURLY FORECAST';

  fs.readFile(filename, 'utf8', (err, readmeContent) => {
    if (err) {
      console.log('FATAL: Failure reading file');
      throw err;
    }

    let allergyRenderLines = [''];
    for (const allergenProp in allergenData)
    {
      const data = allergenData[allergenProp];
      const keys = Object.keys(data);
      const newestDateLabel = keys[keys.length - 1];
      const newestAllergenValue = data[newestDateLabel];

      // Slice off recent ranges, and get allergen counts for those days
      const monthData = keys.slice(-30).map(x => data[x]);
      const weekData = keys.slice(-7).map(x => data[x]);

      allergyRenderLines.push(`- **${allergenProp}: ${newestAllergenValue}** (${newestDateLabel})  [week high: ${Math.max(...weekData)}, month: ${Math.max(...monthData)}]`);
    }
    allergyRenderLines.push('');

    const allergyDataRendered = allergyRenderLines.join(EOL);
    readmeContent = readmeContent.replace(new RegExp(wrapWithInjectionSpot(injectionLabel, '.+?'), "s"),
                        wrapWithInjectionSpot(injectionLabel, allergyDataRendered));

    fs.writeFile(filename, readmeContent, function(err) {
      if(err) console.log('error', err);
    });
  });
}


processHourlyJson(process.env.HTML_HOURLY_NAME);
