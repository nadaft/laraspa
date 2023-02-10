import { store } from '@/store';
import { logout, setAuth } from '@/store/auth.slice';
import axios from 'axios';
import useAxiosWithAuth from './useAxiosWithAuth';

const useAuth = () => {
  const state = store.getState();

  const axiosAuth = useAxiosWithAuth();

  return {
    login: (payload) => {
      return new Promise(async (resolve, reject) => {
        await axios
          .post('/api/auth/login', payload)
          .then((res) => {
            store.dispatch(
              setAuth({
                token: res.data.data.token,
                user: res.data.data.user,
              })
            );

            resolve(res.data.data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },

    check: () => {
      if (state.auth.token) {
        return true;
      }

      return false;
    },

    logout: () => {
      return new Promise(async (resolve, reject) => {
        await axiosAuth.delete('/api/auth/logout')
          .then((res) => {
            store.dispatch(logout());

            resolve(res.data);
          })
          .catch((err) => {
            reject(err.response.data);
          })
      });
    },
  };
};

export default useAuth;
