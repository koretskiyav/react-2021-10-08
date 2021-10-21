import { DECREMENT, INCREMENT } from './constants';

export const increment = ({ id, name, price }) => ({
  type: INCREMENT,
  id,
  name,
  price,
});
export const decrement = ({ id, name, price }) => ({
  type: DECREMENT,
  id,
  name,
  price,
});
