export const LOGIN_USER = 'login_user';
export const REGISTER_USER = 'register_user';
export const AUTH_USER = 'auth_user';

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    // case REGISTER_USER:
    //   return { ...state, register: action.payload };

    // case AUTH_USER:
    //   return { ...state, userData: action.payload };

    default:
      return state;
  }
}
