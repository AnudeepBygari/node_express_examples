const Book = require('../models/bookModel')

const getAllBooks = async (req,res) => {
const books = await Book.find({})
res.status(200).send({books})
}
// const createBook = async (req,res) => {
//     const book = await Book.create(req.body)
// res.status(201).json({ book })
// }

const createBook = async (req, res) => {
    const book = await Book.create(req.body);
    res.status(201).json({ book });
  };

module.exports = {
    getAllBooks,
    createBook,
  }