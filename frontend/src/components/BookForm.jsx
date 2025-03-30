import React, { useState } from 'react';
import { createBook } from '../api';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const [form, setForm] = useState({ title: '', author: '', category: '', price: '', rating: '', publishedDate: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createBook(form);
        navigate('/');
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
                <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
                <input type="number" name="rating" placeholder="Rating" onChange={handleChange} required />
                <input type="date" name="publishedDate" onChange={handleChange} required />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default BookForm;
