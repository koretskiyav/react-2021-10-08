import { normalizedReviews } from '../../fixtures';
import { CREATEREVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, reviews) => ({ ...acc, [reviews.id]: reviews }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, review } = action;

  switch (type) {
    case CREATEREVIEW:
      console.log('reviews');
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
