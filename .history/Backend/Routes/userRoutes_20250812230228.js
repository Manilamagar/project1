const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth('admin'), userCtrl.getUsers);
router.get('/:id', auth(), userCtrl.getUser);
router.put('/:id', auth(), userCtrl.updateUser);
router.delete('/:id', auth('admin'), userCtrl.deleteUser);

module.exports = router;
