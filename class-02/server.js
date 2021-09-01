const http = require('http');
const promises = require('./promises');
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


server.listen(3000, () => {
    console.log('Server started!');
})