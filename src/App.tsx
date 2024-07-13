import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackgroundImage from './components/BackgroundImage';
import Navbar from './components/Navbar';
import StatisticPage from './pages/StatisticPage';
import TicketsPage from './pages/TicketsPage';
import AdminLoginPage from './pages/AdminLoginPage';

import './App.css';

import backgroundImage from '../src/assets/Fond.png'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <BackgroundImage imageUrl={backgroundImage}>
          <Navbar />
          <Routes>
            <Route path="/statistics" element={<StatisticPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/" element={<AdminLoginPage />} />
          </Routes>
        </BackgroundImage>
      </div>
    </Router>
  );
};

export default App;