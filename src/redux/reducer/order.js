import { DECREMENT, INCREMENT, REMOVE } from '../constants';

const initialState = {
  items: [],
};

// { [productId]: amount }
export default function (state = initialState, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      return { ...state };
    default:
      return state;
  }
}
