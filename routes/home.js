const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const inptLog = require('./log');

const router = express.Router();

router.get('/home', (req, res)=>{
    res.render('home', {
        username: inptLog.email
    });
});

module.exports = router;