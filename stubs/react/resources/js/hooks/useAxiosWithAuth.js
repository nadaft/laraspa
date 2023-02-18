import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import store from '@/store';
import { logout } from '@/store/auth.slice';

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
      if (error.response.status === 401) {
        // eslint-disable-next-line no-alert
        alert(error.response.statusText);
        store.dispatch(logout());
        navigate('/login');
        return;
      }

      // eslint-disable-next-line consistent-return
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

export default useAxiosWithAuth;
