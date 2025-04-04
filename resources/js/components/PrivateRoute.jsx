import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <p>Loading...</p>;
    if (!user) return <Navigate to="/login" />;

    return children;
}