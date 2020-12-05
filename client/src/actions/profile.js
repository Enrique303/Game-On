import axios from 'axios';
import { setAlert } from './alert';
import { GET_PROFILE, PROFILE_FAIL } from './constants';

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
         payload: { msg: err.response.statusText, status: err.response.status }
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