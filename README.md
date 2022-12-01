# utils-cli
Handy CLI utils for everyday usage.

## Installation
- clone the repo
- install dependencies and the package itself `npm i -g`

## Usage
There are several functions with different purpose which can be split into multiple groups:
### Glob Batch Operations
Glob operations over given <a href="https://www.npmjs.com/package/glob">Glob</a> mask!
#### Git
- **glob-git-add** [options] <files>             Git add batch operation on multiple git folders.
- **glob-git-branch** [options] <branch-name>    Git branch batch operation on multiple git folders.
- **glob-git-checkout** [options] <branch-name>  Git checkout batch operation on multiple git folders.
- **glob-git-commit** [options]                  Git commit batch operation on multiple git folders.
- **glob-git-fetch** [options]                   Git fetch batch operation on multiple git folders.
- **glob-git-merge** [options] <branch-name>     Git merge batch operation on multiple git folders.
- **glob-git-pull** [options]                    Git pull batch operation on multiple git folders.
- **glob-git-push** [options]                    Git push batch operation on multiple git folders.
- **glob-git-reset** [options]                   Git reset batch operation on multiple git folders.
- **glob-git-status** [options]                  Git status batch operation on multiple git folders.
- **glob-git-submodule-update** [options]        Git submoudles update batch operation on multiple git folders.
#### Other
- **glob-exec** [options] <command>              Exec batch operation on multiple folders defined by Glob pattern.
- **glob-jsonpath** [options]                    Performs specified "jsonpath" (see: https://www.npmjs.com/package/jsonpath) operation on given json file over
multiple folders defined by Glob pattern.
### Common
Operations not related to Glob.
- **list** [options]                 List all files and folders in current folder
- **help** [command]                 display help for command
