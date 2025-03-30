const express = require('express');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('../controllers/book.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/', authMiddleware, createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);

module.exports = router;
