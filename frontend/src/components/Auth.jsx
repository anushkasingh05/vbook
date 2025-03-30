import React, { useState } from 'react';
import { signup, login } from '../api';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = isSignup ? await signup(form) : await login(form);
            localStorage.setItem('token', data.token);
            navigate('/');
        } catch (err) {
            alert('Error: ' + err.response.data.message);
        }
    };

    return (
        <div>
            <h2>{isSignup ? 'Signup' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            </form>
            <button onClick={() => setIsSignup(!isSignup)}>Switch to {isSignup ? 'Login' : 'Signup'}</button>
        </div>
    );
};

export default Auth;
