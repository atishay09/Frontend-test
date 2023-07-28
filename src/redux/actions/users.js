import * as type from '../types';

export function postUser(input) {
   return {
     type: type.GET_USER_REQUESTED,
     payload:input,
   }
 }

 export function clearAuth(){
   return{ type: type.CLEAR_AUTH,}
 }