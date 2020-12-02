import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_FAIL } from '../actions/constants';

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
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      }
    case REGISTER_FAIL:
    case AUTH_FAIL:
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