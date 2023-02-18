import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/Dashboard';
import ProtectedAuthRoutes from './ProtectedAuthRoutes';
import GuestLayout from '@/layouts/GuestLayout';
import Register from '@/pages/auth/Register';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import ResendEmailVerification from '@/pages/auth/ResendEmailVerification';
import VerifyEmail from '@/pages/auth/VerifyEmail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route element={<GuestLayout />}>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
          <Route
            path="/email/resend"
            element={<ResendEmailVerification />}
          />
          <Route
            path="/email/verify/:userId/:hash"
            element={<VerifyEmail />}
          />
        </Route>
        <Route element={<ProtectedAuthRoutes />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
