import { combineReducers } from 'redux';
import products from './reducers/products';
import users from './reducers/user';

const rootReducer = combineReducers({
  products: products,
  user:users,
});

export default rootReducer;