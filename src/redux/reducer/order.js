import produce from 'immer';

import { DECREMENT, INCREMENT, REMOVE } from '../constants';

export default produce((draft = {}, action) => {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      draft[id] = (draft[id] || 0) + 1;
      break;
    case DECREMENT:
      draft[id] = draft[id] > 0 ? (draft[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      draft[id] = 0;
      break;
    default:
      return draft;
  }
});
