import fs = require('fs')
import readline = require('readline')
import {EOL} from 'os'
import QuickChart = require('quickchart-js')

type Filepath = string
type DataSeries = { [key: string]: number; }
type DataCollection = { [allergen: string]: DataSeries }

async function processLineByLine(filename: Filepath) {
  console.log(`INFO: Opening ${filename}`)
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const ignorePattern = new RegExp(/^(\W*|\];\W*)$/);
  const dataPattern = new RegExp(/^{ y: new Date\(\'(.+?)\'\).toLocaleDateString\(\'en-US\', options\), a: (\d+) },?\W?$/);

  const allergenData: DataCollection = {};

  let allergenType = '';
  for await (const line of rl) {
    if (line.startsWith('var ary')) {
      // Old data
      if (allergenType) {
        console.log(`INFO: For: ${allergenType} got ${Object.keys(allergenData[allergenType]).length} records`);
      }

      // New data
      allergenType = line.match(/var ary(.+)\b/)[1];
      // console.log(`INFO: allergen type set: ${allergenType}`);
      continue;
    }

    if (ignorePattern.test(line)) {
      console.log(`DEBUG: ignoring line: '${line}'`);
      continue;
    }

    let dataLine = dataPattern.exec(line);
    if (dataLine != null) {
      console.log(`DEBUG: add data`)
      allergenData[allergenType] = allergenData[allergenType] || {};
      allergenData[allergenType][dataLine[1]] = +dataLine[2];
    }
    else {
      console.log(`WARNING: Unmatched line: '${line}'`)
    }
  }

  for (const allergenProp in allergenData)
  {
    console.log(`INFO: Writing ${allergenProp} data to file`)
    const filename = `alergin.${allergenProp}.json`;
    const newData = allergenData[allergenProp];

    fs.readFile(filename, (err, data) => {
      // TODO consider parsing this as a Map?
      const previousData: any = (err) ? {} : JSON.parse(data.toString());


      // Combine valuesDictionary and previousData
      const combinedData: DataSeries = {...previousData, ...newData};

      fs.writeFile(filename, JSON.stringify(combinedData, null, 2), function(err) {
        if(err) console.log('error', err);
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


processLineByLine(process.env.JS_ARRAYS_NAME);