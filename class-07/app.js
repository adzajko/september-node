const express = require('express');
const router = require('./routes');

const app = express();

// SOLID, S stands for Separation of Concerns

// CRUD
// C (Create) => POST
// R (Read) => GET
// U (Update) => PUT / PATCH
// D (Delete) => DELETE

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;