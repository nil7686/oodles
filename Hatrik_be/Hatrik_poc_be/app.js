require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');

const adminRouter = require('./routes/admin')

const app = express();

app.use(bodyparser.json());

app.use('/admin', adminRouter)



module.exports = app;