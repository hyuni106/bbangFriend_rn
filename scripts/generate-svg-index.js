/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const camelCase = require('camelcase');

let contents = '// This file was created by the generate-svg-index script.\n';
let exportObj = 'export {\n';

const REGEX_SVG = /\.svg$/;

const fileNames = fs.readdirSync('./src/assets/svgs/').sort();
fileNames.forEach(fileName => {
  if (REGEX_SVG.test(fileName)) {
    const name = fileName.replace(REGEX_SVG, '');
    const camelCasedName = camelCase(name, { pascalCase: true });
    contents += `import ${camelCasedName} from 'assets/svgs/${fileName}';\n`;
    exportObj += `  ${camelCasedName},\n`;
  }
});

exportObj += '};';
contents += `\n${exportObj}\n`;

fs.writeFileSync('./src/assets/svgs/index.ts', contents);
