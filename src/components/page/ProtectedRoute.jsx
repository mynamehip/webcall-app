import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loginState = useSelector((state) => state.authState.isLoggedIn);
  if (!loginState) {
    return (
      <div>
        <Navigate to="/login"></Navigate>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
