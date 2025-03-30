const Book = require('../models/book.model');

exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error creating book' });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const { author, category, rating, title } = req.query;
        let filter = {};
        if (author) filter.author = author;
        if (category) filter.category = category;
        if (rating) filter.rating = rating;
        if (title) filter.title = { $regex: title, $options: 'i' };

        const books = await Book.find(filter);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching book' });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error updating book' });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting book' });
    }
};
