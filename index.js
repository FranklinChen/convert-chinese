#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const translate = require('google-translate-api');

function lang(s) {
    if (s.match(/^zh-(cn|tw)$/i)) {
        return s;
    } else {
        console.error(`unsupported language ${s}: must be zh-cn or zh-tw`);
        process.exit(1);
    }
}

program
    .arguments('<file...>')
    .option('-s, --source <zh-cn|zh-tw>', 'Source language', lang)
    .option('-t, --target <zh-cn|zh-tw>', 'Target language', lang)
    .action(translateFiles)
    .parse(process.argv);

function translateFiles(filePaths) {
    if (filePaths) {
        filePaths.forEach(translateFile);
    }
}

function translateFile(filePath) {
    const from = program.source;
    const to = program.target;

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return console.error('readFile:', err);
        } else {
            const tabEncodedData = data.replace(/\t/g, '----');
            translate(tabEncodedData, {from: from, to: to})
                .then(function(result) {
                    const outputFilePath = `${filePath}.output`;
                    const tabDecodedText = result.text.replace(/----/g, '\t');

                    fs.writeFile(outputFilePath, tabDecodedText, function (err) {
                        if (err) {
                            return console.error('writeFile:', err);
                        }
                    });
                }).catch(function (err) {
                    return console.error('translate:', err);
                });
        }
    });
}
