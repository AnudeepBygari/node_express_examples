const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
} = require('../controller/bookController')

// router.route("/").get(getAllBooks).post(createBook)
router.route("/").get(getAllBooks).post(createBook)
module.exports = router
