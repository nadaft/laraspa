import { store } from '@/store';
import { logout } from '@/store/auth.slice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAxiosWithAuth = () => {
  const state = store.getState();

  const navigate = useNavigate();

  const axiosCreate = axios.create({
    headers: {
      Authorization: `Bearer ${state.auth.token}`,
    },
  });

  axiosCreate.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // redirect to login if response unauthenticated
      if (error.response.status == 401) {
        alert(error.response.statusText);
        store.dispatch(logout());
        navigate('/login');
        return;
      }

      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

export default useAxiosWithAuth;
