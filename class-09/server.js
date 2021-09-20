require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectToDb } = require('./core/db');

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server running!');
    });
  })
  .catch(error => {
    console.error(error);
  });
