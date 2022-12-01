const chalk = require('chalk')
const SimpleGit = require('simple-git');
const { options, processGlobFolders } = require('../common/glob-common')

module.exports = {
  options: [
    ...options,
    { flags: '-v, --verbose', description: 'Make the git operation more verbose.', default: false },
  ],

  /**
   * Browses all folders according to given Glob pattern.
   * @param pattern { string } Glob pattern to list the folders.
   * @param verbose { boolean } Report all messages from Git.
   * @param callback { function(git: SimpleGit, folder: string): Promise<void> } Callback function for single
   * repository folder processing.
   * @return Promise<void>
   */
  processGitFolders: async function (pattern, verbose, callback) {
    return processGlobFolders(pattern, async folder => {
      const git = SimpleGit({ baseDir: folder })

      if (verbose) {
        git.outputHandler(
          (command, stdout, stderr) => {
            stdout.on('data', data => {
              console.log(
                chalk.gray(
                  data
                    .toString()
                    .split('\0')
                    .join('\n')
                )
              )
            })
          }
        )
      }

      try {
        await callback(git, folder)
      } catch (e) {
        console.log(`Error: ${chalk.red(e.message)}`)
      }
    })
  }
}
