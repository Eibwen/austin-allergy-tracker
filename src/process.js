const fs = require('fs');
const readline = require('readline');
const {EOL} = require('os');

async function processLineByLine(filename) {
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

  const allerginData = {};

  let allerginType = '';
  for await (const line of rl) {
    if (line.startsWith('var ary')) {
      // Old data
      if (allerginType) {
        console.log(`INFO: For: ${allerginType} got ${Object.keys(allerginData[allerginType]).length} records`);
      }

      // New data
      allerginType = line.match(/var ary(.+)\b/)[1];
      // console.log(`INFO: allergin type set: ${allerginType}`);
      continue;
    }

    if (ignorePattern.test(line)) {
      console.log(`DEBUG: ignoring line: '${line}'`);
      continue;
    }

    let dataLine = dataPattern.exec(line);
    if (dataLine != null) {
      console.log(`DEBUG: add data`)
      allerginData[allerginType] = allerginData[allerginType] || {};
      allerginData[allerginType][dataLine[1]] = dataLine[2];
    }
    else {
      console.log(`WARNING: Unmatched line: '${line}'`)
    }
  }

  for (const allerginProp in allerginData)
  {
    console.log(`INFO: Writing ${allerginProp} data to file`)
    const filename = `alergin.${allerginProp}.json`;
    const newData = allerginData[allerginProp];

    fs.readFile(filename, (err, data) => {
      if (err) {
        // Ignore error
        data = "{}";
      }
      // TODO consider parsing this as a Map?
      const previousData = JSON.parse(data);

      // Combine valuesDictionary and previousData
      const combinedData = {...previousData, ...newData};

      fs.writeFile(filename, JSON.stringify(combinedData, null, 2), function(err, result) {
        if(err) console.log('error', err);
      });
    });
  }


  console.log('INFO: updating README.md')
  updateReadme(allerginData);
}


function wrapWithInjectionSpot(label, str) {
  return `<!-- ${label} -->${str}<!-- END ${label} -->`;
}
function updateReadme(allerginData) {
  const filename = 'README.md';
  const injectionLabel = 'INJECT FORECAST';

  fs.readFile(filename, 'utf8', (err, readmeContent) => {
    if (err) {
      console.log('FATAL: Failure reading file');
      throw err;
    }

    let allergyRenderLines = [''];
    for (const allerginProp in allerginData)
    {
      const data = allerginData[allerginProp];
      const keys = Object.keys(data);
      const newestDateLabel = keys[keys.length - 1];
      const newestAllergenValue = data[newestDateLabel];

      // Slice off recent ranges, and get allergen counts for those days
      const monthData = keys.slice(-30).map(x => data[x]);
      const weekData = keys.slice(-7).map(x => data[x]);

      allergyRenderLines.push(`- **${allerginProp}: ${newestAllergenValue}** (${newestDateLabel})  [week high: ${Math.max(...weekData)}, month: ${Math.max(...monthData)}]`);
    }
    allergyRenderLines.push('');

    const allergyDataRendered = allergyRenderLines.join(EOL);
    readmeContent = readmeContent.replace(new RegExp(wrapWithInjectionSpot(injectionLabel, '.+?'), "s"),
                        wrapWithInjectionSpot(injectionLabel, allergyDataRendered));

    fs.writeFile(filename, readmeContent, function(err, result) {
      if(err) console.log('error', err);
    });
  });
}


processLineByLine(process.env.JS_ARRAYS_NAME);