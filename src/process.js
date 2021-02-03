const fs = require('fs');
const readline = require('readline');

async function processLineByLine(filename) {
  console.log(`INFO: Opening ${filename}`)
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const ignorePattern = new RegExp(/^(\W|\];)$/);
  const dataPattern = new RegExp(/^{ y: new Date\(\'(.+?)\'\).toLocaleDateString\(\'en-US\', options\), a: (\d+) },?\W?$/);

  const allerginData = {};

  let allerginType = '';
  for (const line of rl) {
    if (line.startsWith('var ary')) {
        allerginType = line.match(/var ary(.+)\b/)[1];
        console.log(`INFO: allergin type set: ${allerginType}`);
        continue;
    }

    if (ignorePattern.test(line)) {
        console.log(`DEBUG: ignoring line: '${line}'`);
        continue;
    }

    let dataLine = dataPattern.exec(line);
    if (dataLine != null) {
        console.log(`DEBUG: add data`)
        allerginData[allerginType] = allerginData[allerginType] || [];
        allerginData[allerginType].push({ date: dataLine[1], value: dataLine[2] });
    }
    else {
        console.log(`WARNING: Unmatched line: '${line}'`)
    }
  }

  for (const allerginProp in allerginData)
  {
      console.log(`INFO: Writing ${allerginProp} data to file`)
      const filename = `alergin.${allerginProp}.json`;
      const valuesArray = allerginData[allerginProp];

      fs.writeFile(filename, JSON.stringify(valuesArray, null, 2));
  }
}

processLineByLine(process.env.JS_ARRAYS_NAME);