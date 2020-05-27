const fs = require('fs');
const prettier = require('prettier');

const targetFile = 'src/main/resources/META-INF/resources/frontend/data-generator.ts';
const template = 'data-generator.tpl.ts';
const path = 'src/main/resources/org/vaadin/artur/exampledata';

let generatorRandomOptions = '';
let generatorRandomOptionGenerators = '';
fs.readdirSync(path).forEach((file) => {
  const optionName = file.replace('.txt', '');
  const options = fs.readFileSync(path + '/' + file, { encoding: 'UTF-8' });
  const optionsArray = JSON.stringify(options.split('\n'));

  // options.FirstName = [...];
  generatorRandomOptions += `options.${optionName} = ${optionsArray};\n\n`;

  // [DataType.CompanyName]: { createValue: () => random(options.companyName) },
  generatorRandomOptionGenerators += `  [DataType.${optionName}]: { createValue: () => random(options.${optionName})},\n`;
});

let contents = fs.readFileSync(template, { encoding: 'UTF-8' });
contents = contents.replace('  /* Generator: randomOptionGenerators */', generatorRandomOptionGenerators);
contents = contents.replace('/* Generator: randomOptions */', generatorRandomOptions);

prettier.resolveConfigFile().then((filePath) => {
  prettier.resolveConfig(filePath).then((options) => {
    options.parser = 'typescript';
    contents = prettier.format(contents, options);
    fs.writeFileSync(targetFile, contents);
  });
});
