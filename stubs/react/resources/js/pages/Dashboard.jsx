import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import Head from '@/components/Head';

function Dashboard() {
  const auth = useAuth();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await auth.logout().then(() => navigate('/login'));
  };

  return (
    <>
      <Head title="Dashboard" />
      <div className="flex h-screen flex-col items-center justify-center gap-y-4">
        <h3 className="text-5xl">Hi, {user?.name}</h3>
        <button
          type="button"
          className="hover:text-blue-700"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Dashboard;
