import { GET_PROFILE, PROFILE_FAIL, CLEAR_PROFILE, GET_PROFILES} from "../actions/constants";

const initialState = {
   profile: null,
   profiles: [],
   games: [],
   loading: true,
   error:{}
}

export default function( state= initialState, action ) {
   const { type, payload } = action;

   switch (type) {
      case GET_PROFILE:
         return {
            ...state,
            profile: payload,
            loading: false
         }
      case GET_PROFILES:
         return {
            ...state,
            profiles: payload,
            loading: false
         }
      case PROFILE_FAIL:
         return {
            ...state,
            error: payload,
            loading: false,
            profile:null
         }
      case CLEAR_PROFILE:
         return {
            ...state,
            profile: null,
            loading: false
         }
      default:
         return state;
   }
}