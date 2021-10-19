import { DECREMENT, INCREMENT, ADD, DEL } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case ADD:
      return { ...state, [id]: state[id] };
    case DEL:
      return state.filter();
    default:
      return state;
  }
}
