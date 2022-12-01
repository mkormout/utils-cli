const glob = require('glob')

module.exports = {
  options: [
    { flags: '-p, --pattern <pattern>', description: 'Glob pattern to list the folders.', default: './*/' },
  ],

  /**
   * Browses all folders according to given Glob pattern.
   * @param pattern { string } Glob pattern to list the folders.
   * @param callback { function(folder: string): Promise<void> } Callback function for single
   * repository folder processing.
   * @return Promise<void>
   */
  processGlobFolders: async function (pattern, callback) {
    const folders = glob.sync(pattern)

    for (const folder of folders) {
      await callback(folder)
    }
  }
}
