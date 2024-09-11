const express = require('express');

const router = express.Router();

router.get('/booths', (req, res)=>{
    res.render('booths');
});

module.exports = router;