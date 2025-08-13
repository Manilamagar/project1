const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth('admin'), userController.getUsers);
router.get('/:id', auth(), userController.getUser);
router.put('/:id', auth(), userController.updateUser);
router.delete('/:id', auth('admin'), userCtrl.deleteUser);

module.exports = router;
