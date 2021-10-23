import { combineReducers } from 'redux';
import order from './order';
import restaurant from './restaurant';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  order,
  restaurant,
  restaurants,
  products,
  reviews,
  users,
});
