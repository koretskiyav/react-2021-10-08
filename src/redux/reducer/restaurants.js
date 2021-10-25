import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT_FORM } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurant } = action;

  switch (type) {
    case SUBMIT_FORM:
      return {
        ...restaurants,
        [restaurant.id]: restaurant,
      };
    default:
      return restaurants;
  }
};
