require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectToDb } = require('./db');

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server running');
    });
  })
  .catch(err => {
    console.log(err);
  });
