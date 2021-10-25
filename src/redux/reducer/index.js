import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import restaurantList from './restaurantList';
import users from './users';

export default combineReducers({
  order,
  restaurants,
  restaurantList,
  products,
  reviews,
  users,
});
