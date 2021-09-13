require('dotenv').config();
const http = require('http');
const app = require('./app');
// Importing our database connector
const { connectToDatabase } = require('./db/connection');

const port = process.env.PORT || 8080;
const server = http.createServer(app);

// Connection to the database must be achieved first before starting our server.
// In case such connection is impossible, server should not be started.
connectToDatabase()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server running on port: ${port}.`);
    });
  })
  .catch(err => {
    console.log(err);
  });
