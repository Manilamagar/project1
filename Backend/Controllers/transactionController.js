const { Transaction, Book, User } = require('../models');

exports.borrowBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const userId = req.user.id;
    const book = await Book.findByPk(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.availableCopies < 1) return res.status(400).json({ message: 'No copies available' });

    const tx = await Transaction.create({
      userId, bookId, type: 'borrow', status: 'completed', borrowedAt: new Date()
    });

    await book.update({ availableCopies: book.availableCopies - 1 });
    res.status(201).json(tx);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.returnBook = async (req, res) => {
  try {
    const { transactionId } = req.body;
    const tx = await Transaction.findByPk(transactionId);
    if (!tx) return res.status(404).json({ message: 'Transaction not found' });
    if (tx.type !== 'borrow') return res.status(400).json({ message: 'Invalid transaction' });

    tx.type = 'return';
    tx.status = 'completed';
    tx.returnedAt = new Date();
    await tx.save();

    const book = await Book.findByPk(tx.bookId);
    if (book) await book.update({ availableCopies: book.availableCopies + 1 });

    res.json(tx);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ include: [User, Book], order: [['createdAt','DESC']]});
    res.json(transactions);
  } catch (err) { res.status(500).json({ message: err.message }); }
};
