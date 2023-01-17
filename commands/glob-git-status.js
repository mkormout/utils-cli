const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-status',
  alias: 'ggsta',
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
