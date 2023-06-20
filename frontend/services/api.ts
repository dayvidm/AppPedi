/**
 * Axios
 * https://axios-http.com/
 * */

import axios, { AxiosError } from 'axios';
// import { logout } from '../hooks/useAuth';

let host = 'http://localhost:8000/api';

/*
 * Só pro ambiente local, para testar no celular
 */
// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   host = "http://172.28.128.1:8080/api";
// }

export function setupAPIClient() {
  let token = window.localStorage.getItem('token');
  if (token) {
    token = JSON.parse(token);
  }

  const api = axios.create({
    baseURL: host,
  });

  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  api.defaults.headers.common['Accept'] = 'application/json';

  api.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError<any>) => {
      if (error?.response?.data.message === 'Unauthenticated.') {
        // logout();
      } else {
        return Promise.reject(error);
      }
    }
  );

  return api;
}
