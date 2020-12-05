import { GET_GAME } from "../actions/constants";

const initialState = {
   name:'',
   released:'',
   background_image:'',
   rating:0,
   platforms: '',
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

      default:
         return state;
   }
}