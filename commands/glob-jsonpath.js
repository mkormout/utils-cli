const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const jsonpath = require('jsonpath')
const { options, processGlobFolders } = require('../common/glob-common')

module.exports = {
  name: 'glob-jsonpath',
  alias: 'gjso',
  description: 'Performs specified "jsonpath" (see: https://www.npmjs.com/package/jsonpath) operation on given json file over multiple folders defined by Glob pattern.',
  options: [
    ...options,
    { flags: '-o, --operation <operation>', description: 'Operation to be performed. Alowed operations are query, nodes, paths, value, parent, apply', default: 'query' },
    { flags: '-f, --file <file>', description: 'Filename to be processed.', default: 'package.json' },
    { flags: '-s, --statement <statement>', description: 'Statement to be executed.' },
    { flags: '-v, --value <value>', description: 'Value to be used in connection with the statement (value, apply operations).', default: undefined },
    { flags: '-c, --count <count>', description: 'Return max record count.', default: undefined },
  ],

  action: async ({ pattern, operation, file, statement, value, count }) => {
    return processGlobFolders(
      pattern,
      async folder => {
        const filename = path.join(folder, file)

        console.log(`Performing "${chalk.blue(operation)}" using "${chalk.green(statement)}" on ${chalk.yellow(filename)}:`)

        if (!fs.existsSync(filename)) {
          console.log(`File ${chalk.yellow(filename)} does ${chalk.red('not exist')}!`)
        }

        let json = JSON.parse(
          fs.readFileSync(filename).toString()
        )

        let result = null

        switch (operation) {
          case 'query': {
            result = jsonpath.query(json, statement, count)
            break
          }

          case 'paths': {
            result = jsonpath.paths(json, statement, count)
            break
          }

          case 'nodes': {
            result = jsonpath.nodes(json, statement, count)
            break
          }

          case 'value': {
            result = jsonpath.value(json, statement, value)

            if (value) {
              fs.writeFileSync(
                filename,
                JSON.stringify(json, null, 2)
              )
            }

            break
          }

          case 'parent': {
            result = jsonpath.parent(json, statement)
            break
          }

          case 'apply': {
            result = jsonpath.parent(json, statement, () => value)

            if (value) {
              fs.writeFileSync(
                filename,
                JSON.stringify(json, null, 2)
              )
            }

            break
          }

          default: {
            console.log(`Unsupported operation ${chalk.red(operation)}!`)
            return
          }
        }

        console.log(chalk.gray(result))
      }
    )
  }
}
