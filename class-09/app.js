const express = require('express');
const cors = require('cors');
const starshipRouter = require('./services/starships/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(starshipRouter);

module.exports = app;
