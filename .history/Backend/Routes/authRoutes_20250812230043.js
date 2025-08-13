const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authC.login);

module.exports = router;
