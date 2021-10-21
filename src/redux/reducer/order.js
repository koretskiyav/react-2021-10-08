import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id, name, price } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: {
        amount: ((state[id] && state[id].amount) || 0) + 1,
        name,
        price,
      }};
    case DECREMENT:
      return { ...state, [id]: {
        amount: ((state[id] && state[id].amount) || 0) - 1,
        name,
        price,
      }};
    case REMOVE:
      return { ...state, [id]: {
        ...state[id],
        amount: 0,
      }};
    default:
      return state;
  }
}
