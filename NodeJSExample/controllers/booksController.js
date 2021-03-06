const statusCodes = require("http-status-codes");
const Book = require("../models/booksModel");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ books });
  // console.log('from 8000');
};
const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({ book });
};
const getbook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOne({ id: bookId });
  if (!book) {
    return res.send(`There are no books with this Id ${book}`);
  }
  res.status(statusCodes.CREATED).json({ book });
};
const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndUpdate({ id: bookId });
  if (!book) {
    return res.send(`There are no books with this Id ${book}`);
  }
  res.status(statusCodes.CREATED).json({ book });
};
const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndDelete({ id: bookId });
  if (!book) {
    return res.send(`There are no books with this Id ${book}`);
  }
  res.status(statusCodes.CREATED).json({ book });
};

module.exports = {
  deleteBook,
  updateBook,
  getbook,
  createBook,
  getAllBooks,
};
