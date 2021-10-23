import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id, name, price } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [id]: (state[id] || 0) + 1,
        [`product_${id}`]: {
          amount: (state[id] || 0) + 1,
          name: name,
          price: price,
          id: id,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [id]: (state[id] || 0) - 1,
        [`product_${id}`]: {
          amount: (state[id] || 0) - 1,
          name: name,
          price: price,
          id: id,
        },
      };
    case REMOVE:
      return {
        ...state,
        id,
      };
    default:
      return state;
  }
}
