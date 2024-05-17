import React from "react";
import "./CreationTicket.css";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo.svg';

export const CreationTicket = () => {
  const navigate = useNavigate();

  const handleCreateTicketClick = () => {
    navigate("/creation-ticket");
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="rectangle-blanc">
          <img src={Logo} alt="Logo" className="left-image" />
          <a href="ticket-cour" className="lien">Ticket en cours</a>
          <div className="center-text">Mes tickets</div>
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