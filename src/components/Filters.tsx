import React from 'react';
import './Filters.css';

interface FiltersProps {
  onCreateTicketClick: () => void;
}

const Filters: React.FC<FiltersProps> = ({ onCreateTicketClick }) => {
  return (
    <div className="filters d-flex justify-content-center align-items-center px-2">
      <div className="filter-container d-flex justify-content-center flex-grow-1">
        <button className="filter btn btn-sm btn-outline-secondary mx-1">TOUT</button>
        <button className="filter btn btn-sm btn-outline-secondary mx-1">RÉPONDU</button>
        <button className="filter btn btn-sm btn-outline-secondary mx-1">EN ATTENTE</button>
        <button className="filter btn btn-sm btn-outline-secondary mx-1">FERMÉ</button>
      </div>
      <button
        className="create-ticket-button btn btn-sm btn-primary ml-auto"
        onClick={onCreateTicketClick}
      >
        CRÉER TICKET +
      </button>
    </div>
  );
};

export default Filters;