const chalk = require('chalk')
const { options, processGitFolders } = require('../common/glob-git-common')

module.exports = {
  name: 'glob-git-add',
  alias: 'ggadd',
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
