import React from 'react';

import { Routes, Route } from 'react-router-dom';
import ProtectedRouteUser from './ProtectedRouteUser';
import ProtectedRouteAdmin from './ProtectedRouteAdmin';

import HomePage from '../pages/HomePage';
import AdminTicketsPage from '../pages/AdminTicketsPage';
import ProfilePage from '../pages/ProfilePage';
import StatsPage from '../pages/StatsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DownloadPage from '../pages/DownloadPage';
import TicketsPage from "../pages/TicketsPage";
import ProtectedRouteLoggedUser from "./ProtectedRouteLoggedUser";

const PageRouter: React.FC = () => {
  return (
    <Routes>
      {/* Routes publiques */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<ProtectedRouteLoggedUser element={<RegisterPage />} />} />
      <Route path="/login" element={<ProtectedRouteLoggedUser element={<LoginPage />} />} />
      <Route path="/statistics" element={<StatsPage />} />
      <Route path="/download" element={<DownloadPage />} />

      {/* Routes protégées pour les clients */}
      <Route
        path="/tickets"
        element={<TicketsPage />}
        // element={<ProtectedRouteUser element={<HomePage />} />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
        // element={<ProtectedRouteUser element={<ProfilePage />} />}
      />

      {/* Routes protégées pour les admins */}
      <Route
        path="/adminTickets"
        element={<AdminTicketsPage />}
        // element={<ProtectedRouteAdmin element={<AdminTicketsPage />} />}
      />
    </Routes>
  );
};

export default PageRouter;
