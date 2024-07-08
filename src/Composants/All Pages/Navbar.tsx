import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

interface NavbarProps {
  logoUrl: string;
  title: string;
  tabs: string[];
  routes: string[];
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl, title, tabs, routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<number>(-1);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = routes.findIndex(route => route === currentPath);
    setActiveTab(activeIndex !== -1 ? activeIndex : -1);
  }, [location.pathname, routes]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    navigate(routes[index]);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className="Navbar">
      <button className="Navbar-logo" onClick={handleHomeClick}>
        <img src={logoUrl} alt="Logo" />
      </button>
      <div className="Navbar-title">
        <h1>{title}</h1>
      </div>
      <div className={`Navbar-tabs ${isHomePage ? 'hidden' : ''}`}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`Navbar-tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;