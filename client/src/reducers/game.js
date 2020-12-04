import { GET_GAME, GAMES_FAIL} from "../actions/constants";

const initialState = {
   
   loading: true,
   error:{}
}

export default function( state= initialState, action ) {
   const { type } = action;

   switch (type) {
      case GET_GAME:
         return {
            ...state,
            loading: false
         }
      case GAMES_FAIL:
         return {
            ...state,
            loading: false
         }
      default:
         return state;
   }
}