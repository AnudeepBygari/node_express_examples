const express = require('express')
const router = express.Router()
const {
    deleteBook,
    updateBook,
    getbook,
    createBook,
    getAllBooks,
} = require('../controller/bookController')


router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getbook).patch(updateBook).delete(deleteBook)

module.exports = router