const fs = require('fs')
const chalk = require('chalk')

async function objectToJSFile(object, file) {
  const stringifyObject = await import('stringify-object')
  fs.writeFileSync(file, await stringifyObject.default(object))
}

module.exports = {
  name: 'json2js',
  description: 'Converts given JSON file to JS object format file.',
  arguments: [
    { name: '<src-file>', description: 'Source JSON file.' },
    { name: '<dst-file>', description: 'Destination JS file.' },
  ],
  action: (srcFile, dstFile) => {
    if (!srcFile) {
      console.log(`${chalk.red('Error')}: Source file not defined!`)
    }

    if (!dstFile) {
      console.log(`${chalk.red('Error')}: Destination file not defined!`)
    }

    // TODO: use pipes instead!!!
    const input = fs.readFileSync(srcFile)
    const output = JSON.parse(input.toString('utf-8'))
    return objectToJSFile(output, dstFile)
  }
}
