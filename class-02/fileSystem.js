/**
 * Importing the file system, promises version and assigning it to a corresponding value.
 */

const fs = require('fs/promises');

/**
 * Importing the path module, assigning it to a corresponding variable.
 */
const path = require('path');


/**
 * Constructing a dynamic path to a file using the .join() method found in path,
 * as well as the constant __dirname, which points to the path where the current directory is located.
 * Necessary to ensure polyfills between different OS
 */
const pathToFile = path.join(__dirname, 'sample.txt')

// console.log(pathToFile);

/**
 * Wrapper function for a promise resolver using .then() and .catch()
 * Writing to a file requires at least two arguments. 
 * 1. The path to the file we want to write data to (If the file doesn't exist, it will be created by .writeFile())
 * 2. The data we wish to write to the file.
 * @param {*} args 
 */ 
const writeToFile = (args) => {
    fs.writeFile(pathToFile, args)
        .then(() => {
        }).catch(err => {
            console.log(err);
        })
}

/**
 * Wrapper function for reading from a file using async/await syntax
 * Reading the contents of a file requires the readFile() function located in the filesystem module, as well as an argument that shows the location of the file.
 */
const readFromFile = async () => {
    // The Classic Promise way
    // fs
    // .readFile(pathToFile)
    // .then(response => {

    // })
    // .catch(err => {})

    // The async await way
    const resultFromFileRead = await fs.readFile(pathToFile);
    // console.log(resultFromFileRead.toString());
}   

/**
 * How to export different members of the file to be used in a different one.
 */
module.exports = {
    writeToFile,
    readFromFile
}