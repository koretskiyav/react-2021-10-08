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
      const restaurantData = restaurants[restaurant];
      const { reviews } = restaurantData;

      return {
        ...restaurants,
        [restaurant]: {
          ...restaurantData,
          reviews: [...reviews, review.id],
        },
      };
    }
    default:
      return restaurants;
  }
};
