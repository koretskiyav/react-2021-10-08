import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, values } = action;

  switch (type) {
    case SUBMIT:
      const { values } = action;
      const { restaurantId, id } = values;
      const restaurant = restaurants[restaurantId];
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, id],
        },
      };

    default:
      return restaurants;
  }
};
