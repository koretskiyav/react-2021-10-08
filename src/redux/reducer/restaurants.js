import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADD_REVIEW:
      const { review, activeRestaurantId } = action;
      const activeRestaurant = restaurants[activeRestaurantId];

      return {
        ...restaurants,
        [activeRestaurantId]: {
          ...activeRestaurant,
          reviews: [...activeRestaurant.reviews, review.id],
        },
      };
    default:
      return restaurants;
  }
};
