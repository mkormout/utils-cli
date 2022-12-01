const chalk = require('chalk')
const { exec } = require('child_process')
const { options, processGlobFolders } = require('../common/glob-common')

const execWait = (command, cwd) => new Promise((resolve, reject) => {
  exec(
    command,
    { cwd },
    (error, stdout, stderr) => {
      if (error) {
        console.log(`Error executing ${chalk.blue(command)} with message ${chalk.red(error.message)}`)
        reject()
      } else {
        resolve(stderr || stdout)
      }
    })
})

module.exports = {
  name: 'glob-exec',
  description: 'Exec batch operation on multiple folders defined by Glob pattern.',
  arguments: [
    { name: '<command>', description: 'command to be executed' },
  ],
  options: [
    ...options,
    { flags: '-a, --asynchronous', description: 'Execute the command asynchronously.', default: true },
  ],

  action: async (command, { pattern, asynchronous }) => {
    return processGlobFolders(
      pattern,
      async folder => {
        console.log(`Running "${chalk.blue(command)}" in ${chalk.yellow(folder)}`)

        if (asynchronous) {
          execWait(command, folder).then(stdout => {
            console.log(`Command ${chalk.blue(command)} successfully executed in ${chalk.yellow(folder)}:`)
            console.log(chalk.gray(stdout))
          })
        } else {
          await execWait(command, folder)
        }
      }
    )
  }
}
