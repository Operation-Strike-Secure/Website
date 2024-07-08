import React from "react";

import BackgroundImage from '../Composants/All Pages/BackgroundImage';
import Navbar from '../Composants/All Pages/Navbar';

import backgroundImage from '../assets/Fond.png';
import logo from '../assets/Logo.svg';

export const StatPage: React.FC = () => {
  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <Navbar
        logoUrl={logo}
        title="OPERATION STRIKE & SECURE"
        tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
        routes={['/stat', '/ticket', '/loginAdmin']}
      />
      <div>
        <h1>Bienvenue sur la page de stat</h1>
      </div>
    </BackgroundImage>
  );
};

export default StatPage;