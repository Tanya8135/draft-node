const express = require('express');
const aboutRouter = require('./routes/api/about')

const app = express();


// Middleware для парсинга формы
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public')); /* frontend */
app.use(express.json()); /* for POSTMAN */

app.use('/', aboutRouter);



module.exports = app;