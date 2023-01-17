const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-pull',
  alias: 'ggpul',
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
