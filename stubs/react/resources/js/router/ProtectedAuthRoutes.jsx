import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import store from '@/store';

function ProtectedAuthRoutes() {
  const state = store.getState();

  const { token } = state.auth;

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default ProtectedAuthRoutes;
