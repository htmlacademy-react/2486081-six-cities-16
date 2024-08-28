import axios, {AxiosInstance, isAxiosError} from 'axios';
import {REQUEST_TIMEOUT, URL} from '../conts';
import {getToken} from './token';
import {toast} from 'react-toastify';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  }
  );

  api.interceptors.response.use(null, (error) => {
    if (isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK') {
        toast.error('Network connection error');
      }

      if (error.response && error.response.status >= 500) {
        toast.error('Server response error');
      }
    }
  }
  );

  return api;
};

export const api = createAPI();
