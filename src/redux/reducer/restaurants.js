import { normalizedRestaurants } from '../../fixtures';
import { CREATEREVIEW } from '../constants';
import reviews from './reviews';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurants) => ({ ...acc, [restaurants.id]: restaurants }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restid, review } = action;

  switch (type) {
    case CREATEREVIEW:
      const rid = restid.restid;
      console.log('restaurants', rid);
      return {
        ...restaurants,
        [rid]: {
          ...restaurants[rid],
          reviews: [...restaurants[rid].reviews, review.id],
        },
      };
    default:
      return { ...restaurants };
  }
};
