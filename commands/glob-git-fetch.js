const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-fetch',
  description: 'Git fetch batch operation on multiple git folders.',
  options: [
    ...options,
    { flags: '-a, --all', description: 'All submodules.', default: true },
  ],

  action: async ({ pattern, verbose }) => {
    return processGitFolders(
      pattern,
      true,
      async (git, folder) => {
        console.log(`Fetch of ${chalk.yellow(folder)}`)
        await git.fetch()
      }
    )
  }
}
