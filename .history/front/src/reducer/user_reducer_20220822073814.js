import { LOGIN_USER } from '../action/types';

export default function (state = {}, action) {
  import { LOGIN_USER } from '../action/types';

  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      break;
  }
}
