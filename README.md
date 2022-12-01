# utils-cli
Handy CLI utils for everyday usage.

## Installation
- clone the repo
- install dependencies and the package itself `npm i -g`

## Usage
There are several functions with different purpose which can be split into multiple groups:
### Git Batch Operations
Git batch operations over given <a href="https://www.npmjs.com/package/glob">Glob</a> mask!
- gbad [options] <files>         Git add batch operation on multiple git folders.
- gbbr [options] <branch-name>   Git branch batch operation on multiple git folders.
- gbch [options] <branch-name>   Git checkout batch operation on multiple git folders.
- gbcm [options]                 Git commit batch operation on multiple git folders.
- gbfe [options]                 Git fetch batch operation on multiple git folders.
- gbmr [options] <branch-name>   Git merge batch operation on multiple git folders.
- gbpl [options]                 Git pull batch operation on multiple git folders.
- gbpu [options]                 Git push batch operation on multiple git folders.
- gbrs [options]                 Git reset batch operation on multiple git folders.
- gbst [options]                 Git status batch operation on multiple git folders.
- gbsu [options]                 Git submoudles update batch operation on multiple git folders.
### Common Utils
- glob-exec [options] <command>  Exec batch operation on multiple folders defined by Glob pattern.
- glob-jsonpath [options]        Performs specified "jsonpath" (see: https://www.npmjs.com/package/jsonpath) operation on given json file over multiple
folders defined by Glob pattern.
- list [options]                 List all files and folders in current folder
- help [command]                 display help for command
