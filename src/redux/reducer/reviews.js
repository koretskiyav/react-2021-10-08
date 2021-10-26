import { normalizedReviews } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, rewiew) => ({ ...acc, [rewiew.id]: rewiew }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  switch (type) {
    case ADDREVIEW:
      const { id, userId, text, rating } = review;
      return { ...reviews, [id]: { id, userId, text, rating } };
    default:
      return reviews;
  }
};
