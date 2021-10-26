import { normalizedReviews } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  switch (type) {
    case SUBMIT:
      return {
        ...reviews,
        [review.id]: review,
      };
    default:
      return reviews;
  }
};
