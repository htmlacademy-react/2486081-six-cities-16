import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {REQUEST_TIMEOUT, URL} from '../conts';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import {toast} from 'react-toastify';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const createAPI = (): AxiosInstance => {
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

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<AxiosResponse>) => {
      if (error.request && shouldDisplayError(error.response)) {
        const message = error.response?.data.message;
        toast.warn(message);
      }

      throw error;
    }
  );

  return api;
};

export const api = createAPI();
