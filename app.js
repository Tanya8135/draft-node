const express = require('express');
const aboutRouter = require('./routes/api/about')

const app = express();






// app.get('/', (req, res) => {
//     res.send('Hellow, World! http://localhost:3000/');
// });

// Middleware для парсинга формы
app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public')); /* frontend */
app.use(express.json()); /* for POSTMAN */

app.use('/', aboutRouter);

// Обработка POST-запроса от формы
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     // Обработка данных
//     res.send(`Email: ${email}, Пароль: ${password}`);
// });

module.exports = app;