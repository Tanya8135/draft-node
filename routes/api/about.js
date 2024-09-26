const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Главный роутер');
});

router.get('/about', (req, res) => {
    res.send('About');
});

router.all('/anything', (req, res) => {
    res.send('All test')
})

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(`Email: ${email}, Пароль: ${password}`)
})
module.exports = router;