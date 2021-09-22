require('dotenv').config();
require('../../config/db');
const app = require('../../config/express');
const router = require('./routes');

const PORT = process.env.USERS_PORT;

app.use(router);

app.listen(PORT, () => {
  console.log('USERS microservice running');
});
