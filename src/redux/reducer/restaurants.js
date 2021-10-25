import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurants) => ({ ...acc, [restaurants.id]: restaurants }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
