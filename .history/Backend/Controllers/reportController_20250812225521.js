const { Transaction } = require('../models');
const { transactionsToCSV } = require('../utils/exportUtils');

exports.exportTransactionsCSV = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ include: ['User','Book']});
    const csv = transactionsToCSV(transactions);
    res.header('Content-Type', 'text/csv');
    res.attachment('transactions.csv');
    res.send(csv);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
