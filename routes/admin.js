const express = require('express');

const router = express.Router();

router.get('/admin-access/admin', (req, res)=>{
    res.render('../admin-access/admin');
});

module.exports = router;