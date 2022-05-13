const glob = require('glob')
const chalk = require('chalk')

module.exports = {
  name: 'list',
  description: 'List all files and folders in current folder',
  options: [
    { flags: '-f, --filter <filter>', description: 'Glob pattern.', default: '*' },
    { flags: '-l, --just-list', description: 'Print just a file list.', default: false },
  ],
  action: ({ filter, justList }) => {
    if (!justList) {
      console.log('')
      console.log('Listing files using pattern: ' + chalk.yellow(filter))
      console.log('+----------------------------------------------------')
    }

    const files = glob.sync(filter)

    files.forEach(
      file => console.log(file)
    )

    if (!justList) {
      console.log('+----------------------------------------------------')
      console.log(`Found total ${chalk.yellow(files.length)} records!`)
      console.log('')
    }
  }
}
