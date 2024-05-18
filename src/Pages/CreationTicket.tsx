import React from "react";
import "./CreationTicket.css";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo.svg';

export const CreationTicket = () => {
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
        <div className="rectangle-text">
            <div className="rec-titre-ticket">
                <input type="text" className="titre-ticket" placeholder="Ajouter un titre" />
            </div>
            <div className="rectangle-ecriture">
                <textarea className="text-rectangle-ecriture" placeholder="Composer votre message" />
            </div>
            <button className="send-new-message">Publier</button>
        </div>
      </div>
    </div>
  );
};

export default CreationTicket;