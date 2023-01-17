const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-submodule-update',
  alias: 'ggsubupd',
  description: 'Git submoudles update batch operation on multiple git folders.',
  options: [
    ...options,
    { flags: '-i, --init', description: 'Automatically init submodules.', default: false },
    { flags: '-r, --recursive', description: 'Recursive submodules update.', default: false },
    { flags: '-f, --force', description: 'Force submoudles update.', default: false },
  ],
  action: async ({ pattern, init, recursive, verbose, force }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Updating submodules ${chalk.yellow(folder)}`)

        const params = []

        if (init) params.push('--init')
        if (recursive) params.push('-r')
        if (force) params.push('-f')

        await git.submoduleUpdate(params)
      }
    )
  }
}
