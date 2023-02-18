import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import store from '@/store';

function GuestLayout() {
  const state = store.getState();

  const { token } = state.auth;

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="flex h-screen">
      <div className="hidden flex-grow flex-col items-center justify-center gap-y-2 bg-blue-700 p-4 md:flex">
        <h2 className="text-4xl font-bold text-white">LaraSPA</h2>
        <p className="text-center text-lg font-light text-white">
          Laravel REST API React Scaffolding with Authentication
        </p>
      </div>
      <div className="w-full md:w-[480px]">
        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout;
