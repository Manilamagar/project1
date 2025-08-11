const db = require("../models");
const Borrow = db.Borrow;

exports.borrowBook = async (req, res) => {
  const borrow = await Borrow.create(req.body);
  res.json(borrow);
};

exports.returnBook = async (req, res) => {
  await Borrow.update(
    { status: "Returned", returnDate: new Date() },
    { where: { id: req.params.id } }
  );
  res.json({ message: "Book returned" });
};

exports.getBorrows = async (req, res) => {
  const borrows = await Borrow.findAll({ include: [db.User, db.Book] });
  res.json(borrows);
};
