import React from 'react';
import './Filters.css';

const Filters: React.FC = () => {
  return (
    <div className="filters d-flex justify-content-center align-items-center px-2">
      <div className="filter-buttons-container d-flex justify-content-center flex-grow-1">
        <button className="filter-button btn btn-sm btn-outline-secondary mx-1">TOUT</button>
        <button className="filter-button btn btn-sm btn-outline-secondary mx-1">RÉPONDU</button>
        <button className="filter-button btn btn-sm btn-outline-secondary mx-1">EN ATTENTE</button>
        <button className="filter-button btn btn-sm btn-outline-secondary mx-1">FERMÉ</button>
      </div>
      <button className="create-ticket-button btn btn-sm btn-primary ml-auto">CRÉER TICKET +</button>
    </div>
  );
};

export default Filters;