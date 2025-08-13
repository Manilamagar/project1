const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");
const auth = require('../middleware/authMiddleware');


router.get("/", bookController.getBooks);
router.post("/", bookController.addBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
