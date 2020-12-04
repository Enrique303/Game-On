import axios from 'axios';
import { GET_GAME, GAMES_FAIL } from './constants';

export const searchGames = () => async dispatch => {
   try {
      const res = await axios.get('https://api.rawg.io/api/games?search-term');

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