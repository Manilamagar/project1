// Controllers/transactionController.js
//const { Transaction, Book, User } = require('../Models'); // Ensure 'Models/index.js' exports all

// Borrow a book
exports.borrowBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const userId = req.user.id;

    const book = await Book.findByPk(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    if (book.availableCopies < 1) return res.status(400).json({ message: 'No copies available' });

    const transaction = await Transaction.create({
      userId,
      bookId,
      type: 'borrow',
      status: 'completed',
      borrowedAt: new Date(),
    });

    await book.update({ availableCopies: book.availableCopies - 1 });
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return a borrowed book
exports.returnBook = async (req, res) => {
  try {
    const { transactionId } = req.body;

    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    if (transaction.type !== 'borrow') return res.status(400).json({ message: 'Invalid transaction type' });

    transaction.type = 'return';
    transaction.status = 'completed';
    transaction.returnedAt = new Date();
    await transaction.save();

    const book = await Book.findByPk(transaction.bookId);
    if (book) await book.update({ availableCopies: book.availableCopies + 1 });

    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// List all transactions
exports.listTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      include: [User, Book],
      order: [['createdAt', 'DESC']],
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
