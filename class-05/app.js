const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const uuid = require('uuid');

const app = express();

app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    genid: () => uuid.v4(),
    cookie: { maxAge: 36000 },
    saveUninitialized: true,
    resave: false
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(router);

module.exports = app;

// SEO SEARCH ENGINE OPTIMIZATION
// <h1> <img alt= aria- keywords, different page title, meta, semantics, bootstrap, material-ui