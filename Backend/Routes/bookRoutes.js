const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');
const authMiddleware = require('../Middleware/authMiddleware');

// Get all books - accessible to any logged-in user
router.get('/', authMiddleware(), bookController.getBooks);

// Get a single book by ID
router.get('/:id', authMiddleware(), bookController.getBook);

// Create a new book - admin only
router.post('/', authMiddleware('admin'), bookController.createBook);

// Update a book - admin only
router.put('/:id', authMiddleware('admin'), bookController.updateBook);

// Delete a book - admin only
router.delete('/:id', authMiddleware('admin'), bookController.deleteBook);

module.exports = router;
