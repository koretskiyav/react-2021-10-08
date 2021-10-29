import produce from 'immer';
import {
  LOAD_REVIEWS,
  ADD_REVIEW,
  FAILURE,
  REQUEST,
  SUCCESS,
  CHANGE_RESTAURANT,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_REVIEWS + SUCCESS: {
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    }
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      });
    case CHANGE_RESTAURANT:
      return { ...state, loaded: false };

    default:
      return state;
  }
};
