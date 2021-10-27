import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedReviews), action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft[reviewId] = { id: reviewId, userId, text, rating };
      });
    default:
      return state;
  }
};
