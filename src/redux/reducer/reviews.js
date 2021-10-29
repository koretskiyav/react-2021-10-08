import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
const initialState = {
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};
export default (state = arrToMap(normalizedReviews), action) => {
  const { type, review, reviewId, userId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_REVIEWS + SUCCESS:
      console.log(arrToMap(data));
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};
