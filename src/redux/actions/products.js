import * as type from '../types';

export function getProducts(skip) {
   return {
     type: type.GET_PRODUCTS_REQUESTED,
     payload:skip,
   }
 }