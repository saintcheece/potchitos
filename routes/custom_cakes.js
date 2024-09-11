const express = require('express');

const router = express.Router();

router.get('/custom_cakes', (req, res)=>{
    res.render('custom_cakes');
});

module.exports = router;