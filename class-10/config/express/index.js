/**
 * Core Express configuration. Used in all microservices.
 */

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
