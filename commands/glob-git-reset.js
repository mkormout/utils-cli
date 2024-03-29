const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')
const { CleanOptions } = require('simple-git')

module.exports = {
  name: 'glob-git-reset',
  alias: 'ggres',
  description: 'Git reset batch operation on multiple git folders.',
  options: [
    ...options,
  ],

  action: async ({ pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Reseting and cleaning ${chalk.yellow(folder)}`)
        await git.reset(['--hard'])
        await git.clean([CleanOptions.FORCE], ['-d'])
      }
    )
  }
}
