const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');

router.post('/register', auth.register);
router.post('/login', authCtrl.login);

module.exports = router;
