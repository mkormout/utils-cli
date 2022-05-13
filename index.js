#! /usr/bin/env node

const glob = require('glob')
const path = require('path')

const { program } = require('commander')

const files = glob.sync('./commands/**/*.js', { cwd: __dirname })

for (const file of files) {
  const { name, description, arguments = [], options = [], action } = require(
    path.resolve(path.join(__dirname, file))
  )

  const command = program.command(name)

  command.description(description)

  arguments.forEach(
    argument => command.argument(
      argument.name,
      argument.description,
    )
  )

  options.forEach(
    option => command.option(
      option.flags,
      option.description,
      option.default
    )
  )

  command.action(action)
}

program.parse()


