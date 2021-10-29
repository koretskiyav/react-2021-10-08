import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default produce((draft = {}, action) => {
  const { type, id, restId } = action;
  switch (type) {
    case INCREMENT:
      draft[id] = { amount: (draft[id]?.amount || 0) + 1, restId };
      break;
    case DECREMENT:
      draft[id] = {
        amount: draft[id]?.amount > 0 ? (draft[id]?.amount || 0) - 1 : 0,
      };
      break;
    case REMOVE:
      draft[id] = { amount: 0 };
      break;
    default:
      return draft;
  }
});
