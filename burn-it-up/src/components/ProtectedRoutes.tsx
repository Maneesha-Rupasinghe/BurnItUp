import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { JSX } from 'react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>; 

    return user ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
