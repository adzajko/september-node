require('dotenv').config();
require('../../config/db');
const app = require('../../config/express');
const router = require('./routes');

const PORT = process.env.POSTS_PORT || 8082;

app.use(router);

app.listen(PORT, () => {
  console.log('Posts MicroService started!');
});
