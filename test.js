const express = require('express');
const app = express();

// Middleware для парсинга формы
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); /* frontend */

// Обработка POST-запроса от формы
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Обработка данных
    res.send(`Email: ${email}, Пароль: ${password}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});