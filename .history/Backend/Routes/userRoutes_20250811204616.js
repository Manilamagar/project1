const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userCntroller");

router.get("/", userController.getUsers);
router.post("/", userController.addUser);

module.exports = router;
