const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

//ACTIVATES ON-LOAD
router.get('/log', (req, res) => {
    res.render('log');
});

//ACTIVATES ON REQUEST (SUBMIT)
router.post('/log', (req, res) => {
    if(req.body.inptEmail == 'rees' && req.body.inptPass == 'pass1'){
        // PASSABLE DATA
        exports.email = req.body.inptEmail;
        exports.pass = req.body.inptPass;
        res.redirect('/');
    }else{
        // create a session to flash a message back to log in
        req.flash('log_response', 'Invalid Email or Password');
        res.render('log', { info: req.flash('log_response') });
    }
});

exports.routes = router;