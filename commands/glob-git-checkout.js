const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-checkout',
  description: 'Git checkout batch operation on multiple git folders.',
  arguments: [
    { name: '<branch-name>', description: 'name of desired git branch' },
  ],
  options: [
    ...options,
    { flags: '-b, --create-branch', description: 'Create a new branch.', default: false },
  ],
  action: (branchName, { createBranch, pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {

      if (createBranch) {
        console.log(`Checkout new branch ${chalk.green(branchName)} on ${chalk.yellow(folder)}`)
        await git.checkout( ['-b', branchName])
      } else {
        console.log(`Checkout branch ${chalk.green(branchName)} on ${chalk.yellow(folder)}`)
        await git.checkout( branchName)
      }
    })
  }
}
