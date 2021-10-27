import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, userId, restId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.error = null;
      draft.loading[restId] = true;
      break;
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.entities = { ...draft.entities, ...arrToMap(data) };
      draft.loading[restId] = false;
      draft.loaded[restId] = true;
      break;
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[restId] = false;
      draft.loaded[restId] = false;
      draft.error = error;
      break;
    }
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
