import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, review } = action;

  switch (type) {
    case ADDREVIEW:
      const { restaurantId, id: reviewId } = review;
      const restaurant = restaurants[restaurantId];
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, reviewId],
        },
      };
    default:
      return restaurants;
  }
};
