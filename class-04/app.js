const express = require('express');
const ejs = require('ejs');
const applicationRoutes = require('./routes');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');
// app.set('views', 'views');

/**
 * How to set up static files to be served via express.
 * Static files can be .js, .css, .html, images or even entire React or Angular apps.
 */
app.use(express.static(path.join(__dirname, 'public')));
/**
 * Setting the view engine to be EJS
 */
app.set('view engine', 'ejs');

/**
 * Setting the location of the EJS templates.
 */
app.set('views', 'views');

app.use(applicationRoutes);

module.exports = app;
