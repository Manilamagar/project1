const express = require('express');
const router = express.Router();
const txCtrl = require('../Controllers/transactionController');
const auth = require('../middleware/authMiddleware');

router.post('/borrow', auth(), txCtrl.borrowBook);
router.post('/return', auth(), txCtrl.returnBook);
router.get('/', auth('admin'), txCtrl.listTransactions);

module.exports = router;
