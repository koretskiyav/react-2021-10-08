import { DECREMENT, INCREMENT, DROPFROMBASKET } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      if (state[id] > 1) {
        return { ...state, [id]: (state[id] || 0) - 1 };
      } else {
        delete state[id];
        return { ...state };
      }
    case DROPFROMBASKET:
      delete state[id];
      return { ...state };
    default:
      return state;
  }
}
