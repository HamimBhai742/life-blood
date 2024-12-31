import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProtectedRoute = ({children}) => {
    const { user } = useAuth()
    if (user) {
        return children
    }
    toast.error("User must be login for Blood bonate request")
    return <Navigate to="/login"></Navigate>
};

export default ProtectedRoute;