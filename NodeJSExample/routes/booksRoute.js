const express = require("express");
const router = express.Router();
const {
  deleteBook,
  updateBook,
  getbook,
  createBook,
  getAllBooks,
} = require('../controllers/booksController')

router.route("/").get(getAllBooks).post(createBook)
router.route('/:id').get(getbook).put(updateBook).delete(deleteBook)

module.exports = router
