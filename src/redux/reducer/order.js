import produce from 'immer';
import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  REMOVE,
  REQUEST,
  SEND_ORDER,
  SUCCESS,
} from '../constants';

const initialState = {
  entities: {},
  sending: false,
  error: null,
  text: '',
};

export default produce((draft = initialState, action) => {
  const { type, id, data, error } = action;
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
    case SEND_ORDER + REQUEST:
      draft.sending = true;
      draft.error = null;
      console.log(draft.sending);
      break;
    case SEND_ORDER + SUCCESS:
      draft.sending = false;
      draft.entities = {};
      draft.error = null;
      draft.text = data;
      console.log(draft.sending);

      break;
    case SEND_ORDER + FAILURE:
      draft.sending = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
