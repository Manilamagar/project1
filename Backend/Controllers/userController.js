const db = require("../models");
const User = db.User;

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
