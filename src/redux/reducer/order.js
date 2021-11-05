import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  CHECKOUT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  sending: false,
  sended: false,
  entities: {},
  error: null,
};

// { [productId]: amount }
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
    case CHECKOUT + REQUEST: {
      draft.error = null;
      draft.sending = true;
      break;
    }
    case CHECKOUT + SUCCESS: {
      draft.sending = false;
      draft.entities = {};
      break;
    }
    case CHECKOUT + FAILURE: {
      draft.sending = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
