const fs = require('fs/promises');

const writeToFile = async (data, pathToFile) => {
  await fs.writeFile(pathToFile, data);
};

module.exports = { writeToFile };
