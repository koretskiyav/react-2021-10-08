import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE:
      return Object.entries(state).reduce(
        (acc, [key, value]) =>
          key === id
            ? { ...acc }
            : {
                ...acc,
                [key]: value,
              },
        {}
      );
    default:
      return state;
  }
}
