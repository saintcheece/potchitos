const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const inptLog = require('./log');

const router = express.Router();

router.get('/home', (req, res)=>{
    console.log(inptLog.email);
    console.log(inptLog.pass);
    res.render('home');
});

module.exports = router;