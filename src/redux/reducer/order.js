import produce from 'immer';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  info: null,
  error: null,
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, id, info, error, status = 200 } = action;
    const entities = draft.entities;

    switch (type) {
      case INCREMENT:
        entities[id] = (entities[id] || 0) + 1;
        break;
      case DECREMENT:
        entities[id] = entities[id] > 0 ? (entities[id] || 0) - 1 : 0;
        break;
      case REMOVE:
        entities[id] = 0;
        break;
      case SEND_ORDER + REQUEST: {
        draft.loading = true;
        draft.info = null;
        draft.error = null;
        break;
      }
      case SEND_ORDER + SUCCESS: {
        draft.loading = false;
        draft.loaded = status === 200;
        draft.info = info;
        break;
      }
      case SEND_ORDER + FAILURE: {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
