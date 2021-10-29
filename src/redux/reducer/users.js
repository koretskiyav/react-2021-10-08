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
  loaded: false,
  loading: false,
  entities: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, userId, data, error } = action;

  switch (type) {
    case LOAD_USERS + REQUEST:
      draft.loading = true;
      return draft;
    case LOAD_USERS + SUCCESS:
      draft.loaded = true;
      draft.loading = false;
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      return draft;
    case LOAD_USERS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
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
