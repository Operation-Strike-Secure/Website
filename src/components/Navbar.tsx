import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth } from "../context/AuthProvider";
import {Icon} from "@mui/material";

export const MyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const handleHomeClick = () => {
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-blue-transparent sticky top-0 w-full z-50">
      {/* Partie haute de la navbar pour les grands écrans */}
      <div className="hidden md:flex container mx-auto px-4 py-4 justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleHomeClick}>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </button>
          <NavLink
            className="text-white font-bold text-xl ml-4 underline"
            to="/"
          >
            OPERATION STRIKE & SECURE
          </NavLink>
        </div>

        <div className="flex items-center space-x-6">
          {!isAuthenticated ? (
            <>
              <NavLink
                className="text-gray-300 hover:text-white"
                to="/login"
              >
                <Icon component={LoginOutlinedIcon} />
              </NavLink>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Icon component={NotificationsIcon} className="w-6 h-6 text-gray-300 hover:text-white" />
              <button
                onClick={logout}
                className="text-gray-300 hover:text-white"
              >
                <Icon component={LogoutIcon} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Partie basse de la navbar pour les grands écrans */}
      <div className="hidden md:flex container mx-auto px-4 py-2 border-t border-gray-700 justify-center space-x-6">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-transparent bg-clip-text bg-nav-gradient"
                : "text-gray-300 hover:text-white"
            }`
          }
          to="/statistics"
        >
          STATISTIQUES
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-transparent bg-clip-text bg-nav-gradient"
                : "text-gray-300 hover:text-white"
            }`
          }
          to="/download"
        >
          TELECHARGER
        </NavLink>
        {isAuthenticated && (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-transparent bg-clip-text bg-nav-gradient"
                  : "text-gray-300 hover:text-white"
              }`
            }
            to={isAdmin ? "/adminTickets" : "/tickets"}
          >
            TICKETS
          </NavLink>
        )}
      </div>

      {/* Navbar pour les petits écrans (en dessous de md) */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={handleHomeClick}>
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </button>
          {/* Nom qui change en fonction de la taille de l'écran */}
          <NavLink
            className="text-transparent bg-clip-text bg-nav-gradient font-bold text-xl ml-4 "
            to="/"
          >
            OSS
          </NavLink>
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu déroulant pour les petits écrans */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 z-50">
            {/* Partie haute du menu déroulant avec les autres pages */}
            <div className="px-4 py-4 space-y-2">
              <NavLink
                className={({ isActive }) =>
                  `block text-gray-300 hover:text-white ${
                    isActive
                      ? "text-transparent bg-clip-text bg-nav-gradient"
                      : ""
                  }`
                }
                to="/statistics"
              >
                STATISTIQUES
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white ${
                    isActive
                      ? "text-transparent bg-clip-text bg-nav-gradient"
                      : ""
                  }`
                }
                to="/download"
              >
                TELECHARGER
              </NavLink>
              {isAuthenticated && (
                <NavLink
                  className={({ isActive }) =>
                    `block text-gray-300 hover:text-white ${
                      isActive
                        ? "text-transparent bg-clip-text bg-nav-gradient"
                        : ""
                    }`
                  }
                  to={isAdmin ? "/adminTickets" : "/tickets"}
                >
                  TICKETS
                </NavLink>
              )}
            </div>

            {/* Barre de séparation */}
            <hr className="border-gray-700" />

            {/* Partie basse du menu déroulant avec login/register ou logout */}
            <div className="px-4 py-4 space-y-2">
              {!isAuthenticated ? (
                <>
                  <NavLink
                    className="text-gray-300 hover:text-white"
                    to="/login"
                  >
                    <Icon component={LoginOutlinedIcon} />
                  </NavLink>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <BellIcon className="w-6 h-6 text-gray-300 hover:text-white" />
                  <button
                    onClick={logout}
                    className="text-gray-300 hover:text-white"
                  >
                    <Icon component={LogoutIcon} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
