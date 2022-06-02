# utils-cli
Handy CLI utils for everyday usage.

## Installation
- clone the repo
- install dependencies and the package itself `npm i -g`

## Usage
There are several functions with different purpose which can be split into multiple groups:
### Git Batch Operations
Git batch operations over given <a href="https://www.npmjs.com/package/glob">Glob</a> mask!
- gbch [options] <branch-name>   Git checkout batch operation on multiple git folders.
- gbcm [options]                 Git commit batch operation on multiple git folders.
- gbpl [options]                 Git pull batch operation on multiple git folders.
- gbpu [options]                 Git push batch operation on multiple git folders.
- gbrs [options]                 Git reset batch operation on multiple git folders.
- gbst [options]                 Git status batch operation on multiple git folders.
- gbsu [options]                 Git submoudles update batch operation on multiple git folders.
### Common Utils
- json2js <src-file> <dst-file>  Converts given JSON file to JS object format file.
- list [options]                 List all files and folders in current folder
