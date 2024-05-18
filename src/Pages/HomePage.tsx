import React from "react";
import "./HomePage.css";
import "./Design.css";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo.svg';
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg';
import statistiques from '../assets/statistiques.svg';


export const HomePage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCreateTicketClick = () => {
    navigate("/creation-ticket");
  };

  const handleTicketCourClick = () => {
    navigate("/ticket-cour");
  };

  const handlePresWebsiteClick = () => {
    window.location.href = "https://eipepitech.wordpress.com/";
  };

  const handleStatClick = () => {
    navigate("/statistiques");
  };

  const handleMesTicketsClick = () => {
    navigate("/mes-tickets");
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="rectangle-blanc">
          <button className="button-left-image" onClick={handleHomeClick}>
            <img src={Logo} alt="Logo" className="left-image" />
          </button>
          <button className="lien" onClick={handleTicketCourClick}>Ticket en cours</button>
          <button className="center-text" onClick={handleMesTicketsClick}>Mes tickets</button>
          <button className="create-ticket-button" onClick={handleCreateTicketClick}>Créer un ticket</button>
        </div>
        <div className="search-bar">
          <SearchIcon className="search-icon" />
          <input type="text" className="search-input" placeholder="Rechercher un ticket ..." />
        </div>
        <div className="carre-gauche">
          <div className="text-gauche">Site officiel</div>
          <button className="button-logo" onClick={handlePresWebsiteClick}>
            <img src={Logo} alt="Create Ticket" className="button-image" />
          </button>
        </div>
        <div className="carre-droite">
          <div className="text-droite">Statistiques du jeu</div>
          <button className="button-statistiques" onClick={handleStatClick}>
            <img src={statistiques} alt="Create Ticket" className="button-image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;