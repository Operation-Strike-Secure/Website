// ProtectedRouteAdmin.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

interface ProtectedRouteAdminProps {
  element: JSX.Element;
}

const ProtectedRouteAdmin: React.FC<ProtectedRouteAdminProps> = ({ element }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRouteAdmin;
