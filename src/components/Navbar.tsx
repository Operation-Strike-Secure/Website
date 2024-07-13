import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="d-flex align-items-center">
          <button className="navbar-logo btn btn-link p-0 me-2" onClick={handleHomeClick}>
            <img src={logo} alt="Logo" className="logo-img" />
          </button>
          <NavLink className="navbar-brand" to="/">OPERATION STRIKE & SECURE</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/statistics">STATISTIQUES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tickets">TICKETS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">ADMIN</NavLink>
            </li>
            <li className="rien">
              <NavLink className="rien2" to="/admin">Rien</NavLink>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;