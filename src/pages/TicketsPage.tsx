import React from 'react';
import Tableau from '../components/Tableau';
import Filters from '../components/Filters';
import Rectangle from '../components/Rectangle';
import './TicketsPage.css';

const TicketsPage: React.FC = () => {
  return (
    <div className="tickets-page-container container mt-4">
      <Rectangle width="200%" height="50vh" marginTop="90px">
        <Filters />
        <Tableau />
      </Rectangle>
    </div>
  );
};

export default TicketsPage;