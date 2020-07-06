const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Login', {
        layout: 'login'
    });
})

router.get('/dashboard',(req, res) => {
    res.render('DashBoard');
})

module.exports = router;