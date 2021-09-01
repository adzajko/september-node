
/**
 * Importing the http module, assigning it to a value.
 */
const http = require('http');
/**
 * Importing our own files. Note the difference in the path passed as an argument (The relative path denoted with ./)
 */
const promises = require('./promises');

/**
 * Creating a server using the createServer() method located in the http module.
 */
const server = http.createServer(
//     (request, response) => {
//     switch (request.url) {
//         case '/users': {
//             break;
//         }

//         case '/posts': {

//         }
//     }
// }
);

console.log(promises.asyncOperation());

const fileSystem = require('./fileSystem');

fileSystem.readFromFile();

// Without destructuring
// const mulitplications = require('./multiplications');

// with destructuring
// const { multiplyThree } = require('./multiplications');

// This is indirect return
// const multiplyTwo = (numberOne, numberTwo) => {
//     return numberOne * numberTwo;
// }

// This is direct return
// const multiplyTwo = (numberOne, numberTwo) => numberOne * numberTwo

// console.log(mulitplications.multiplyThree(3, 4, 2));

// console.log(multiplyThree(4, 5, 6));


/**
 * Starting a server using the listen() method. An argument for a port is usually provided, as well as an annonymous function that reports if the server is started.
 */
server.listen(3000, () => {
    console.log('Server started!');
})