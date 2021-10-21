import { combineReducers } from 'redux';
import order from './order';
import productList from './productList';
import basket from './basket';

export default combineReducers({
  order,
  productList,
  basket,
});
