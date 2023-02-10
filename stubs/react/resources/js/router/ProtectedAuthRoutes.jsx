import { store } from '@/store'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAuthRoutes = () => {
  const state = store.getState();

  const token = state.auth.token;

  if (!token) {
    return <Navigate to='/login' />
  }

  return <Outlet />
}

export default ProtectedAuthRoutes
