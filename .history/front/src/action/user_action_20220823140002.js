import axios from 'axios';
// import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';

export function loginUser(dataToSubmit) {
  // 백에서 가져온 모든데이터
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data);

  // 리듀서한테 보내기
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  // 백에서 가져온 모든데이터
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((response) => response.data);

  // 리듀서한테 보내기
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

// 인증
export function auth(dataToSubmit) {
  // 백에서 가져온 모든데이터
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((response) => response.data);

  // 리듀서한테 보내기
  return {
    type: AUTH_USER,
    payload: request,
  };
}
