/**
 * We initialize the app using npm init --y
 * Afterwards we install express using npm install express (or just npm i express)
 * We need to create the app.js file which holds the express handler, import it into server.js and pass it as an argument to the createServer function.
 */

const http = require('http');

const app = require('./app');
/**
 * How to handle requests without using express.
 * A pretty convoluted way which requires checks for both method and url
 */
// const server = http.createServer(
//     // (req, res) => {
//     //     // const url = req.url;
//     //     // switch (url) {
//     //     //     case '/posts': {
//     //     //         break;
//     //     //     }
    
//     //     //     case '/customners': {
//     //     //         break;
//     //     //     }
//     //     // }
//     //     // console.log(req);
//     //     // res.end();
//     // }
// );

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('Server started!');
})