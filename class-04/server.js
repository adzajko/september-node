/**
 * IMPORTANT. Always run this require + config() at the start of your app.
 * This enables dotenv to load the process.env variables you define in .env in time.
 */
require('dotenv').config();
const http = require('http');
const app = require('./app');

/**
 * The port will be taken from the process.env (.env file) OR will have a default setting of 3000 if the file cannot be loadd.
 */
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
console.log(`${process.env.APP_NAME} started on port: ${PORT}`);
  //console.log(process.env);
});
