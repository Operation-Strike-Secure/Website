import React from "react";

import BackgroundImage from '../Composants/BackgroundImage';
import Navbar from '../Composants/Navbar';
import FilterableRectangle from '../Composants/FilterableRectangle';

import backgroundImage from '../assets/Fond.png';
import logo from '../assets/Logo.svg';

export const CreationTicket: React.FC = () => {
  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <Navbar
        logoUrl={logo}
        title="OPERATION STRIKE & SECURE"
        tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
        routes={['/stat', '/ticket', '/loginAdmin']}
      />
      <div>
        <FilterableRectangle />
      </div>
    </BackgroundImage>
  );
};

export default CreationTicket;