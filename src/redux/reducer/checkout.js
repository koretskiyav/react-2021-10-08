import produce from 'immer';
import { SUBMIT_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  order: [],
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, error } = action;

  switch (type) {
    case SUBMIT_ORDER + REQUEST: {
      draft.error = null;
      draft.loading = true;
      draft.loaded = false;
      break;
    }
    case SUBMIT_ORDER + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      break;
    }
    case SUBMIT_ORDER + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
