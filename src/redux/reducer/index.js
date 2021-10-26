import { combineReducers } from 'redux';
import order from './order';
import restaurantId from './restaurant';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  order,
  restaurantId,
  restaurants,
  products,
  reviews,
  users,
});
