import { GET_GAME, GAMES_FAIL } from "../actions/constants";

const initialState = {
   results:[],
   loading: true,
   error:{}
}

export default function( state= initialState, action ) {
   const { type, payload } = action;

   switch (type) {
      case GET_GAME:
         return {
            ...state,
            results:payload,
            loading: false
         }
      case GAMES_FAIL:
         return {
            ...state,
            error: payload,
            loading: false
         }
      default:
         return state;
   }
}