const express = require('express');
const router = express.Router();
const reportCtrl = require('../Controllers/reportController');
const auth = require('../middleware/authMiddleware');

router.get('/transactions/csv', auth('admin'), reportController.exportTransactionsCSV);

module.exports = router;
