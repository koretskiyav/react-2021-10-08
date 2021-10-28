import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loaded = false;
      draft.loading = true;
      draft.error = null;
      return draft;
    case LOAD_USERS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      draft.loaded = true;
      draft.loading = false;
      draft.error = false;
      return draft;
    case LOAD_USERS + FAILURE:
      draft.loaded = false;
      draft.loading = false;
      draft.error = error;
      return draft;
    case ADD_REVIEW:
      const { name } = review;
      draft.entities[userId] = { id: userId, name };
      break;

    default:
      return draft;
  }
});
