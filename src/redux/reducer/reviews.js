import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce(
  (acc, reviews) => ({ ...acc, [reviews.id]: reviews }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
