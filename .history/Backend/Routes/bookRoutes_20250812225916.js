const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");
const auth = require('../middleware/authMiddleware');


// public
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBook);

// admin protected: create, update, delete
router.post('/', auth('admin'), bookController.createBook);
router.put('/:id', auth('admin'), bookController.updateBook);
router.delete('/:id', auth('admin'), bookController.deleteBook);


router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
