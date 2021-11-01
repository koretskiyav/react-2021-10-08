import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: {amount, restId} }
export default function (state = {}, action) {
  const { type, id, restId } = action;
  switch (type) {
    case INCREMENT:
      const item = state[id] || { restId, amount: 0 };
      return {
        ...state,
        [id]: { ...item, amount: item.amount + 1 },
      };
    case DECREMENT:
      return state[id]
        ? {
            ...state,
            [id]: {
              ...state[id],
              amount: state[id].amount > 0 ? (state[id].amount || 0) - 1 : 0,
            },
          }
        : state;
    case REMOVE:
      return { ...state, [id]: { ...state[id], amount: 0 } };
    default:
      return state;
  }
}
