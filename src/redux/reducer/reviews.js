import { normalizedReviews } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, values } = action;

  switch (type) {
    case SUBMIT:
      const { id, rating, text, userId } = values;
      return {
        ...reviews,
        [values.id]: { id, rating, text, userId },
      };
    default:
      return reviews;
  }
};
