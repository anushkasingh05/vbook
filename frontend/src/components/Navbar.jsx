import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav>
            <Link to="/">Books ,    </Link>
            {token ? (
                <>
                    <Link to="/add">Add Book</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/auth">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;
