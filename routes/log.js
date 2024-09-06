const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/log', (req, res) => {
    res.render('log');
});

router.post('/log', (req, res) => {
    exports.email = req.body.inptEmail;
    exports.pass = req.body.inptPass;
    res.redirect('/home');
});

exports.routes = router;