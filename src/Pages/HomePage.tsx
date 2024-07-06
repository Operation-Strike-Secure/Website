import React from "react";
import BackgroundImage from '../Composants/BackgroundImage';
import Navbar from '../Composants/Navbar';
import backgroundImage from '../assets/Fond.png';
import logo from '../assets/Logo.svg';

export const HomePage: React.FC = () => {
  return (
    <BackgroundImage imageUrl={backgroundImage}>
      <Navbar
        logoUrl={logo}
        title="OPERATION STRIKE & SECURE"
        tabs={['STATISTIQUES', 'TICKETS', 'ADMIN']}
        routes={['/stat', '/ticket', '/loginAdmin']}
      />
      <div>
        <h1>Bienvenue sur la page d'accueil</h1>
        <p>Ceci est le reste du contenu de la page d'accueil.</p>
      </div>
    </BackgroundImage>
  );
};

export default HomePage;