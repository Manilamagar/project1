const express = require('express');
const router = express.Router();
const reportCtrl = require('../controllers/reportController');
const auth = require('../middleware/authMiddleware');

router.get('/transactions/csv', auth('admin'), reportCtrl.exportTransactionsCSV);

module.exports = router;
