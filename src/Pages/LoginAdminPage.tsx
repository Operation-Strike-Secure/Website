import React, { useState, FormEvent } from 'react';

import BackgroundImage from '../Composants/All Pages/BackgroundImage';
import Navbar from '../Composants/All Pages/Navbar';

import backgroundImage from '../assets/Fond.png';
import logo from '../assets/Logo.svg';

export const LoginAdminPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Email/Username and Password are required.');
        } else {
            try {
                // Simulate login logic
                const isLoginSuccessful = simulateLogin(email, password);
                if (isLoginSuccessful) {
                    // Handle successful login
                    console.log('Logged in successfully');
                } else {
                    setError('Invalid email/username or password.');
                }
            } catch (error) {
                setError('An error occurred while logging in. Please try again later.');
            }
        }
    };

    // This function simulates login validation
    const simulateLogin = (email: string, password: string) => {
        // Simulating login validation
        return email === 'test@example.com' && password === 'password';
    };

    return (
      <BackgroundImage imageUrl={backgroundImage}>
      <Navbar
        logoUrl={logo}
        title="OPERATION STRIKE & SECURE"
        tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
        routes={['/stat', '/ticket', '/loginAdmin']}
      />
      <form onSubmit={handleSubmit}>
            <div>
                <label>Email/Username</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    </BackgroundImage>
    );
};

export default LoginAdminPage;