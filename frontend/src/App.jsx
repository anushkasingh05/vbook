import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Books from './components/Books';
import BookForm from './components/BookForm';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/add" element={<BookForm />} />
            </Routes>
        </Router>
    );
};

export default App;
