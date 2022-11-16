const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbfe',
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
