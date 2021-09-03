
/**
 * We import express the same way we'd import any other third party dependency.
 *
 */
const express = require('express');
/**
 * We assign the value of the result of the above variable (which can be executed as a function, as shown below)
 */
const app = express();

/**
 * The routes of the application, defined in another file
 */
const applicationRoutes = require('./routes');

// const router = express.Router();

// router.get('/posts', (req, res, next) => {
//     console.log(req);
//     res.status(200).send("Site postovi")
// })

/**
 * REQUEST BODY PARSERS
 * Middleware functions that transform incoming request bodies to readable JSON format.
 * The .use() middleware here means that the functions passed as arguments will be executed for EVERY request, regardless of URL or Method
 */
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
/**
 * END REQUEST BODY PARSERS
 */

app.use(applicationRoutes);

module.exports = app;
