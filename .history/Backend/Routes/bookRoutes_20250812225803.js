const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");
const auth = require('../middleware/authMiddleware');


// public
router.get('/', bookCtrl.getBooks);
router.get('/:id', bookCtrl.getBook);

// admin protected: create, update, delete
router.post('/', auth('admin'), bookCtrl.createBook);
router.put('/:id', auth('admin'), bookCtrl.updateBook);
router.delete('/:id', auth('admin'), bookCtrl.deleteBook);


router.get("/", bookController.getBooks);
router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
