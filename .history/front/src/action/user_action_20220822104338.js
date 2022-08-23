import axios from 'axios';
// import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

export function loginUser(dataToSubmit) {
  // 백에서 가져온 모든데이터
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((response) => response.data);

  // 리듀서한테 보내기
  return {
    type: 'LOGIN_USER',
    payload: request,
  };
}
