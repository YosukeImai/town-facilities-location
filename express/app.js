'use strict'
const express = require('express');
const app = express();

app.use('/api/facilities', require('./routes/facilities'));

module.exports = app;