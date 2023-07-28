import * as type from '../types';


const initialState = {
  products: [],
  loading: false,
  error: null,
  limit:null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products:[...state.products, ...action.products.products],
        limit:action.products.total
      }
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}