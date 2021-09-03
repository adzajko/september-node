const fs = require('fs/promises');

const fileWriter = async (data, path) => {
    await fs.writeFile(path, data)
}

const fileReader = async (path) => {
    const rawResult = await fs.readFile(path);
    return rawResult.toString()
}

module.exports = {
    fileWriter,
    fileReader
}