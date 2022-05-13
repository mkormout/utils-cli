const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbpu',
  description: 'Git push batch operation on multiple git folders.',
  options: [
    ...options,
  ],

  action: async ({ pattern, verbose }) => {
    return processGitFolders(
      pattern,
      true,
      async (git, folder) => {
        console.log(`Pushing ${chalk.yellow(folder)}`)
        await git.push()
      }
    )
  }
}
