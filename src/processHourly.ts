import fs = require('fs')
import readline = require('readline')
import {EOL} from 'os'

type Filepath = string
type DataSeries = { [key: string]: number; }
type DataCollection = { [allergen: string]: DataSeries }

async function processHourlyJson(filename: Filepath) {
  console.log(`INFO: Opening ${filename}`)
  // const fileStream = fs.createReadStream(filename);

  fs.readFile(filename, "utf8", (error, data) => {
    if (error) {
      console.log('ERROR', error);
      return;
    }

    const hourlyDataObject = JSON.parse(data);

    console.log(hourlyDataObject);
  });



  const allergenData: DataCollection = {};

  for (const allergenProp in allergenData)
  {
    console.log(`INFO: Processing ${allergenProp} data to file`)
    const filename = `allergenData/daily.${allergenProp}.json`;
    const readFilename = filename;

    const newData = allergenData[allergenProp];

    console.log(`INFO: Reading previous data ${readFilename}`)
    fs.readFile(readFilename, (err, data) => {
      if(err) {
        console.log('ERROR', err);
        return;
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


  console.log('INFO: updating README.md')
  updateReadme(allergenData);
}


function wrapWithInjectionSpot(label: string, str: string) {
  return `<!-- ${label} -->${str}<!-- END ${label} -->`;
}
function updateReadme(allergenData: DataCollection) {
  const filename = 'README.md';
  const injectionLabel = 'INJECT FORECAST';

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
