const express = require("express");
const router = express.Router();
const borrowController = require("../Controllers/borrowController");

router.get("/", borrowController.getBorrows);
router.post("/", borrowController.borrowBook);
router.put("/return/:id", borrowController.returnBook);

module.exports = router;
