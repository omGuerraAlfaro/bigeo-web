import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const location = useLocation();
    const isAuth = localStorage.getItem("token");
    
    if (location.pathname === '/') {
        return isAuth ? <Navigate to="/home-admin" /> : children;
    }
    return isAuth ? children : <Navigate to="/" />;
}

export default AuthGuard;
