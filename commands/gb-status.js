const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbst',
  description: 'Git status batch operation on multiple git folders.',
  options: [
    ...options,
  ],

  action: async ({ pattern, verbose }) => {
    return processGitFolders(
      pattern,
      true,
      async (git, folder) => {
        console.log(`Status of ${chalk.yellow(folder)}`)
        await git.status()
      }
    )
  }
}
