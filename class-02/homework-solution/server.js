const http = require('http');
const server = http.createServer();
const dataContents = require('./mock-db');
const path = require('path');

const pathToObjectFile = path.join('object.txt');
const pathToArrayFile = path.join('array.txt');

// With object destructuring
// const { fileReader, fileWriter } = require('./file-manipulator');

// Without object destructuring
const fileManipulators = require('./file-manipulator');

// Combining both writes in a single function
const handleBothWrites = async () => {
  // Both properties need to be stringified in order for the write to succeed.
  const stringifiedObj = JSON.stringify(dataContents.artist);
  const stringifiedArray = JSON.stringify(dataContents.otherSongs);
  await fileManipulators.fileWriter(stringifiedObj, pathToObjectFile);
  await fileManipulators.fileWriter(stringifiedArray, pathToArrayFile);
};

handleBothWrites()
  .then(() => {
    console.log('Both files written.');
  })
  .catch(err => console.log(err));

const handleBothReads = async () => {
  const arrayResult = await fileManipulators.fileReader(pathToArrayFile);
  const objectResult = await fileManipulators.fileReader(pathToObjectFile);

  console.log(arrayResult);
  console.log(objectResult);
};

handleBothReads()
  .then(() => {
    console.log('Both files read.');
  })
  .catch(err => console.log(err));

server.listen(8080, () => {
  console.log('Server running!');
});
