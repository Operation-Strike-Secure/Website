import React from "react";
import "./TicketEnCour.css";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo.svg';

export const TicketEnCour = () => {
  const navigate = useNavigate();

  const handleCreateTicketClick = () => {
    navigate("/creation-ticket");
  };

  const handleTicketClick = (id: number, title: string, text: string) => {
    navigate(`/ticket-detail/${id}`, {
      state: { title, text }
    });
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="rectangle-blanc">
          <img src={Logo} alt="Logo" className="left-image" />
          <a href="ticket-cour" className="lien-actif">Ticket en cours</a>
          <div className="center-text">Mes tickets</div>
          <button className="create-ticket-button" onClick={handleCreateTicketClick}>Créer un ticket</button>
        </div>
        <div className="rectangle-text-2">
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(1, "Ticket 1", "Texte descriptif 1")}>
              <h3 className="ticket-title">Ticket 1</h3>
              <p className="ticket-text">Texte descriptif 1</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(2, "Ticket 2", "Texte descriptif 2")}>
              <h3 className="ticket-title">Ticket 2</h3>
              <p className="ticket-text">Texte descriptif 2</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(3, "Ticket 3", "Texte descriptif 3")}>
              <h3 className="ticket-title">Ticket 3</h3>
              <p className="ticket-text">Texte descriptif 3</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(4, "Ticket 4", "Texte descriptif 4")}>
              <h3 className="ticket-title">Ticket 4</h3>
              <p className="ticket-text">Texte descriptif 4</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default TicketEnCour;
