export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';
export const AUTH_USER = 'auth_user';

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case REGISTER_USER:
      return { ...state, register: action.payload };

    // index.js node에서 모든것을 처리하고난다음에 user정보들을 정해주고있는데 userData라고 이름을지어줌 그냥 다른이름이어도된다사실
    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
}
