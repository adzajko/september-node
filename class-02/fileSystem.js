const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, 'sample.txt')

// console.log(pathToFile);

const writeToFile = (args) => {
    fs.writeFile(pathToFile, args)
        .then(() => {
        }).catch(err => {
            console.log(err);
        })
}

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


module.exports = {
    writeToFile,
    readFromFile
}