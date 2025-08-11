const db = require("../models");
const Book = db.Book;

exports.getBooks = async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
};

exports.addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
};

exports.updateBook = async (req, res) => {
  await Book.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Book updated" });
};

exports.deleteBook = async (req, res) => {
  await Book.destroy({ where: { id: req.params.id } });
  res.json({ message: "Book deleted" });
};
