require('dotenv').config();
const proxy = require('express-http-proxy');
const app = require('../../config/express');

const PORT = process.env.MAIN_PORT;
const PREFIX = process.env.PREFIX;

/**
 * Proxy function that forwards all requests sent on the main server(http://localhost:MAIN_PORT)
 * to the users microservice
 */
app.use(
  `${PREFIX}/users`,
  proxy(`http://localhost:${process.env.USERS_PORT}`, {
    proxyReqPathResolver: async req => {
      return req.url;
    }
  })
);

/**
 * Proxy function that forwards all requests sent on the main server(http://localhost:MAIN_PORT)
 * to the posts microservice
 */
app.use(
  `${PREFIX}/posts`,
  proxy(`http://localhost:${process.env.POSTS_PORT}`, {
    proxyReqPathResolver: async req => {
      return req.url;
    }
  })
);

app.listen(PORT, () => {
  console.log('Proxy running!');
});
