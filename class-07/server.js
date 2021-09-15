require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectToDb } = require('./db');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

connectToDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
