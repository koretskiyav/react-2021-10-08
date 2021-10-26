import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT_FEEDBACK } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case SUBMIT_FEEDBACK: {
      const id = action.restaurantId;
      return {
        ...restaurants,
        [id]: {
          ...restaurants[id],
          reviews: [...restaurants[id].reviews, action.id],
        },
      };
    }
    default:
      return restaurants;
  }
};
