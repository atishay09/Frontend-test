import * as type from '../types';


const initialState = {
   user: [],
   loading: false,
   error: null,
 }
 
 export default function users(state = initialState, action) {
   switch (action.type) {
     case type.GET_USER_REQUESTED:
       return {
         ...state,
         loading: true,
       }
     case type.GET_USER_SUCCESS:
       return {
         ...state,
         loading: false,
         user: action.user
       }
     case type.GET_USER_FAILED:
       return {
         ...state,
         loading: false,
         error: action.message,
       }
       case type.CLEAR_AUTH:{
         return{
            user:null,
            error:null,
            loading:false,
         }
       }
     default:
       return state
   }
 }