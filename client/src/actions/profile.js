import axios from 'axios';
import { setAlert } from './alert';
import { CLEAR_PROFILE, GET_PROFILE, PROFILE_FAIL, ACCOUNT_DELETE, GET_PROFILES } from './constants';

export const getUserProfile = () => async dispatch => {
   try {
      const res = await axios.get('/api/profile/myprofile');

      dispatch({
         type: GET_PROFILE,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: PROFILE_FAIL,
         payload: { status: err.response }
      });
   }
}

export const createProfile = (formInfo, history, edit = false) => async dispatch => {
   try {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }
      const res = await axios.post('/api/profile', formInfo, config);
      dispatch({
         type: GET_PROFILE,
         payload: res.data,
      });
      dispatch(setAlert(edit ? 'Profile Update' : 'Profile Created'));
      if (!edit) {
         history.push('/home')
      }
   } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
         errors.forEach((error) => dispatch(setAlert(error.msg)))
      }
      dispatch({
         type: PROFILE_FAIL,
         payload: { msg: err.response.statusText, status: err.response.status }
      });
   }
}

export const getProfiles = () => async dispatch => {
   try {
      const res = await axios.get('/api/profile/');

      dispatch({
         type: GET_PROFILES,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: PROFILE_FAIL,
         payload: { msg: err.response.statusText, status: err.response.status }
      });
   }
}

export const deleteAccount = () => async dispatch => {
   if (window.confirm('Delete Account?')) {
      try {
         await axios.delete('/api/profile');

         dispatch({ type: CLEAR_PROFILE });
         dispatch({ type: ACCOUNT_DELETE });

         dispatch(setAlert('Your account has been deleted'))
      } catch (err) {
         dispatch({
            type: PROFILE_FAIL,
            payload: { msg: err.response.statusText, status: err.response.status }
         });
      }
   }
};