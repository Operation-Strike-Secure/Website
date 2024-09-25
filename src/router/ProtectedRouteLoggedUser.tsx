// ProtectedRouteClient.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

interface ProtectedRouteUserProps {
    element: JSX.Element;
}

const ProtectedRouteLoggedUser: React.FC<ProtectedRouteUserProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/" />;
    }

    return element;
};

export default ProtectedRouteLoggedUser;
