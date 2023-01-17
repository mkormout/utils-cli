const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-commit',
  alias: 'ggcom',
  description: 'Git commit batch operation on multiple git folders.',
  options: [
    ...options,
    { flags: '-m, --message <message>', description: 'Git commit message.' },
    { flags: '-n, --noverify', description: 'Bypass pre-commit and commit-msg hooks.', default: true },
    { flags: '-a, --all', description: 'Commit all.', default: true },
  ],

  action: async ({ pattern, message, all, verbose, noverify }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Commiting ${chalk.yellow(folder)}`)

        const params = []

        if (message) params.push('-m', message)
        if (all) params.push('-a')
        if (noverify) params.push('-n')

        await git.commit(message, [], params)
      }
    )
  }
}
