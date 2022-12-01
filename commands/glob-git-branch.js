const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-branch',
  description: 'Git branch batch operation on multiple git folders.',
  arguments: [
    { name: '<branch-name>', description: 'name of desired git branch' },
  ],
  options: [
    ...options,
    { flags: '-D, --delete-branch', description: 'Deletes a branch.', default: false },
  ],
  action: (branchName, { deleteBranch, pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {

      if (deleteBranch) {
        console.log(`Delete branch ${chalk.green(branchName)} on ${chalk.yellow(folder)}`)
        await git.branch( ['-D', branchName])
      } else {
        console.log(`Create branch ${chalk.green(branchName)} on ${chalk.yellow(folder)}`)
        await git.branch(branchName)
      }
    })
  }
}
