import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_FAIL } from './constants';
import setToken from '../utils/setToken'

export const userLoaded = () => async dispatch => {
  if (localStorage.token) {
    setToken(localStorage.token)
  } 

  try {
    const res = await axios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data })
  } catch (err) {
    dispatch({ type: AUTH_FAIL })
  }
}

export const register = ({ name, email, password }) => async dispatch => {
  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({name, email, password});
  try {
    const res = await axios.post('/api/user', body,config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg,)))
    }
    dispatch({
      type: REGISTER_FAIL,
    })
  }
}