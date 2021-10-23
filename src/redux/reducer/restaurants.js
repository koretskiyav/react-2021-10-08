import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, review, restaurant } = action;

  switch (type) {
    case ADD_REVIEW: {
      return {
        ...restaurants,
        [restaurant]: {
          ...restaurants[restaurant],
          reviews: [...restaurants[restaurant].reviews, review.id],
        },
      };
    }
    default:
      return restaurants;
  }
};
