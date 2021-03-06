import axios from 'axios';

const BACKEND_URL = 'https://test.kode-t.ru/list';
const REQUEST_TIMEOUT = 5000;

const HttpCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVICE_UNAVAILABLE: 503,
};

export const createAPI = (onUnauthorized, onNotFound, onServiceUnavailable) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (data) => data;

  const onFail = ({ response }) => {
    if (response.status === HttpCodes.UNAUTHORIZED) {
      onUnauthorized();
      throw response.data.errors;
    }

    if (response.status === HttpCodes.NOT_FOUND) {
      onNotFound();
      throw response.data.errors;
    }

    if (response.status === HttpCodes.SERVICE_UNAVAILABLE) {
      onServiceUnavailable();
      throw response.data.errors;
    }

    throw response.data.errors;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
