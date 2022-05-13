const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbcm',
  description: 'Git commit batch operation on multiple git folders.',
  options: [
    ...options,
    { flags: '-m, --message <message>', description: 'Git commit message.' },
    { flags: '-a, --message <all>', description: 'Commit all.', default: true },
  ],

  action: async ({ pattern, message, all, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Commiting ${chalk.yellow(folder)}`)

        const params = []

        if (message) params.push('-m', message)
        if (all) params.push('-a')
        params.push('-n')

        await git.commit(params)
      }
    )
  }
}
