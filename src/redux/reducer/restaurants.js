import produce from 'immer';
import { ADD_REVIEW } from '../constants';
import { normalizedRestaurants } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedRestaurants), action) => {
  const { type, restId, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft[restId].reviews.push(reviewId);
      });

    // const restaurant = state[restId];
    // return {
    //   ...state,
    //   [restId]: {
    //     ...restaurant,
    //     reviews: [...restaurant.reviews, reviewId],
    //   },
    // };

    default:
      return state;
  }
};
