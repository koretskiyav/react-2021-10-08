import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loaded: {},
  loading: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, data, error, restId, review, reviewId, userId } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loaded[restId] = false;
      draft.loading[restId] = true;
      draft.error[restId] = null;
      return draft;

    case LOAD_REVIEWS + SUCCESS:
      draft.loaded[restId] = true;
      draft.loading[restId] = false;
      draft.error[restId] = null;
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      return draft;

    case LOAD_REVIEWS + FAILURE:
      console.log(action);
      draft.loaded[restId] = false;
      draft.loading[restId] = false;
      draft.error[restId] = error;
      return draft;

    case ADD_REVIEW:
      const { text, rating } = review;
      draft.entities[reviewId] = { rating, text, userId, reviewId };
      return draft;

    default:
      return draft;
  }
});
