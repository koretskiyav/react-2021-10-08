import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, product } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [product.id]: {
          ...product,
          amount: (state[product.id]?.amount || 0) + 1,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [product.id]: {
          ...product,
          amount: (state[product.id]?.amount || 0) - 1,
        },
      };
    case REMOVE:
      return {
        ...Object.fromEntries(
          Object.entries(state).filter(([id]) => id !== product.id)
        ),
      };

    default:
      return state;
  }
}
