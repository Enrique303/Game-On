import axios from 'axios';
import { GET_GAME, GAMES_FAIL } from './constants';

export const searchGames = name => async dispatch => {
   console.log(name)
   try {
      const res = await axios.get(`/api/games/${name}`);
      console.log(res.data)
      dispatch({
         type: GET_GAME,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: GAMES_FAIL,
         payload: { status: err.response.status }
      });
   }
}