'use strict'
const express = require('express');
const app = express();

app.use('/api/facilities', require('./routes/facilities'));


app.listen(3000);