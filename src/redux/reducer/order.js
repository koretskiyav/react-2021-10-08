import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  MAKE_ORDER,
  REMOVE,
  REQUEST,
  SUCCESS,
} from '../constants';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, id, error } = action;
  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;
    case DECREMENT:
      draft.entities[id] =
        draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      break;
    case REMOVE:
      draft.entities[id] = 0;
      break;
    case MAKE_ORDER + REQUEST:
      draft.error = null;
      draft.loading = true;
      break;
    case MAKE_ORDER + SUCCESS:
      draft.loading = false;
      draft.entities = {};
      break;
    case MAKE_ORDER + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
