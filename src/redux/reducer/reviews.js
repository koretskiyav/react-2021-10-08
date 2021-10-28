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
  loading: {},
  loaded: {},
  entities: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, review, reviewId, userId, id, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loaded[id] = false;
      draft.loading[id] = true;
      draft.error[id] = null;
      return draft;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      draft.loaded[id] = true;
      draft.loading[id] = false;
      draft.error[id] = false;
      return draft;
    case LOAD_REVIEWS + FAILURE:
      draft.loaded[id] = false;
      draft.loading[id] = false;
      draft.error[id] = error;
      return draft;
    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      return draft;
    default:
      return draft;
  }
});
