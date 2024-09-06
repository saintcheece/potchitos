const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const inptEmail = '';
const inptPass = '';

router.get('/log', (req, res) => {
    res.render('log');
});

router.post('/log', (req, res) => {
    inptEmail = {email: req.body.input-email};
    inptPass = {pass: req.body.input-password};
    res.redirect('/home');
})

exports.routes = router;
exports.email = inptEmail;
exports.pass = inptPass;