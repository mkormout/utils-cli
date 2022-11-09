const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbmr',
  description: 'Git merge batch operation on multiple git folders.',
  arguments: [
    { name: '<branch-name>', description: 'name of desired git branch' },
  ],
  options: [
    ...options,
  ],
  action: (branchName, { createBranch, pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {

      console.log(`Merging branch ${chalk.green(branchName)} on ${chalk.yellow(folder)}`)
      await git.merge([branchName])
    })
  }
}
