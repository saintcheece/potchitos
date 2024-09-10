const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

//ACTIVATES ON-LOAD
router.get('/log', userController.getUserLog);

//ACTIVATES ON REQUEST (SUBMIT)
router.post('/log', userController.postUserLog);

exports.routes = router;