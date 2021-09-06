const express = require('express');
const applicationRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(applicationRoutes);

module.exports = app;
