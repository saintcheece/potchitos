const express = require('express');
const path = require('path');
const flash = require('express-flash')
const rootDir = require('../util/path');

const router = express.Router();

let isInvalid = false;

router.use(flash());

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
        res.redirect('/');
    }else{
        isInvalid = true;
        req.flash('error', 'Invalid Email or Password');
        res.redirect('/log');
    }
});

exports.routes = router;