import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (state[id] - 1 > 0) return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      return Object.entries(state).reduce(
        (prev, [key, value]) =>
          key === id ? { ...prev } : { ...prev, [key]: value },
        {}
      );
    default:
      return state;
  }
}
