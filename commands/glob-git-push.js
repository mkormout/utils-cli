const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-push',
  alias: 'ggpus',
  description: 'Git push batch operation on multiple git folders.',
  options: [
    ...options,
    { flags: '-u, --setupstream <setupstream...>', description: 'Set upstream branch.' },
  ],

  action: async ({ pattern, verbose, setupstream, remote, branch }) => {
    return processGitFolders(
      pattern,
      true,
      async (git, folder) => {
        if (setupstream) {
          const [remote, branch] = setupstream
          console.log(`Pushing ${chalk.yellow(folder)} to ${chalk.blue(remote)} as ${chalk.green(branch)}`)
          await git.push(['-u', remote, branch])
        } else {
          console.log(`Pushing ${chalk.yellow(folder)}`)
          git.push()
        }
      }
    )
  }
}
