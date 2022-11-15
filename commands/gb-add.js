const chalk = require('chalk')
const { options, processGitFolders } = require('../common/gb-common')

module.exports = {
  name: 'gbad',
  description: 'Git add batch operation on multiple git folders.',
  arguments: [
    { name: '<files>', description: 'files to be added' },
  ],
  options: [
    ...options,
  ],

  action: async (files, { pattern, verbose }) => {
    return processGitFolders(
      pattern,
      verbose,
      async (git, folder) => {
        console.log(`Adding ${chalk.green(files)} in ${chalk.yellow(folder)}`)
        await git.add(files)
      }
    )
  }
}
