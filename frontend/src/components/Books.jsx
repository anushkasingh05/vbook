import React, { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../api';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const { data } = await getBooks();
        setBooks(data);
    };

    const handleDelete = async (id) => {
        await deleteBook(id);
        fetchBooks();
    };

    return (
        <div>
            <h2>Books List</h2>
            {books.map((book) => (
                <div key={book._id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <button onClick={() => handleDelete(book._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Books;
