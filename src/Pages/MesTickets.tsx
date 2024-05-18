import React from "react";
import "./MesTickets.css";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/Logo.svg';

export const MesTickets = () => {
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

  const handleTicketClick = (id: number, title: string, text: string) => {
    navigate(`/mes-ticket-detail/${id}`, {
      state: { title, text }
    });
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="rectangle-blanc">
          <button className="button-left-image" onClick={handleHomeClick}>
            <img src={Logo} alt="Logo" className="left-image" />
          </button>
          <button className="lien" onClick={handleTicketCourClick}>Ticket en cours</button>
          <button className="center-text-actif" onClick={handleMesTicketsClick}>Mes tickets</button>
          <button className="create-ticket-button" onClick={handleCreateTicketClick}>Créer un ticket</button>
        </div>
        <div className="rectangle-text-2">
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(1, "Mon Ticket 1", "Mon Texte descriptif 1")}>
              <h3 className="ticket-title">Mon Ticket 1</h3>
              <p className="ticket-text">Mon Texte descriptif 1</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(2, "Mon Ticket 2", "Mon Texte descriptif 2")}>
              <h3 className="ticket-title">Mon Ticket 2</h3>
              <p className="ticket-text">Mon Texte descriptif 2</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(3, "Mon Ticket 3", "Mon Texte descriptif 3")}>
              <h3 className="ticket-title">Mon Ticket 3</h3>
              <p className="ticket-text">Mon Texte descriptif 3</p>
            </button>
            <button className="rectangle-mes-tickets" onClick={() => handleTicketClick(4, "Mon Ticket 4", "Mon Texte descriptif 4")}>
              <h3 className="ticket-title">Mon Ticket 4</h3>
              <p className="ticket-text">Mon Texte descriptif 4</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MesTickets;