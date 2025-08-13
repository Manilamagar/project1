const express = require('express');
const router = express.Router();
const txController = require('../Controllers/transactionController');
const auth = require('../middleware/authMiddleware');

router.post('/borrow', auth(), txCtrl.borrowBook);
router.post('/return', auth(), txCtrl.returnBook);
router.get('/', auth('admin'), txController.listTransactions);

module.exports = router;
