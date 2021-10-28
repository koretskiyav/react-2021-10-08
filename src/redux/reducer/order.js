import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default produce((draft = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      draft[id] = (draft[id] || 0) + 1;
      return draft;
    case DECREMENT:
      draft[id] = draft[id] > 0 ? (draft[id] || 0) - 1 : 0;
      return draft;
    case REMOVE:
      draft[id] = 0;
      return draft;
    default:
      return draft;
  }
});
