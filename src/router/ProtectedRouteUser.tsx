// ProtectedRouteClient.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

interface ProtectedRouteUserProps {
  element: JSX.Element;
}

const ProtectedRouteUser: React.FC<ProtectedRouteUserProps> = ({ element }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated || isAdmin) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRouteUser;
