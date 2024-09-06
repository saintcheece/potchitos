const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

let isInvalid = false;

//ACTIVATES ON-LOAD
router.get('/log', (req, res) => {
    res.render('log', {isInvalid: isInvalid});
});

//ACTIVATES ON REQUEST (SUBMIT)
router.post('/log', (req, res) => {
    if(req.body.inptEmail == 'rees' && req.body.inptPass == 'pass1'){
        // PASSABLE DATA
        exports.email = req.body.inptEmail;
        exports.pass = req.body.inptPass;
        res.redirect('/home');
    }else{
        isInvalid = true;
        res.redirect('/log');
    }
});

exports.routes = router;