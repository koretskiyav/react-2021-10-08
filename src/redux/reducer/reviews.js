import produce from 'immer';
import { ADD_REVIEW, LOAD_REVIEWS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, review, reviewId, userId, data } = action;

  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        ...arrToMap(data),
      };
    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};
