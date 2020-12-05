import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACCOUNT_DELETE } from '../actions/constants';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  loading: true,
  user: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      }
    case REGISTER_FAIL:
    case AUTH_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETE:
      localStorage.removeItem('token')
      return {
        ...state,
        token:null,
        isAuth: false,
        loading: false
      }
      case USER_LOADED:
        return {
          ...state,
          isAuth: true,
          loading: false,
          user: payload
        }
    default:
      return state;
  }
}