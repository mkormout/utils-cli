const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbpl',
  description: 'Git pull batch operation on multiple git folders.',
  options: [
    ...options,
  ],

  action: async ({ pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Pulling ${chalk.yellow(folder)}`)
        await git.pull()
      }
    )
  }
}
