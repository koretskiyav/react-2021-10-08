import { normalizedReviews } from '../../fixtures';
import { SUBMIT_FEEDBACK } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    case SUBMIT_FEEDBACK: {
      const { id, userId, rating, text } = action;
      return { ...reviews, [id]: { id, userId, rating, text } };
    }
    default:
      return reviews;
  }
};
