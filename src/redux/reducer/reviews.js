import {normalizedReviews} from '../../fixtures';
import {ADD_REVIEW} from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({...acc, [review.id]: review}),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload} = action;

  switch (type) {
    case ADD_REVIEW:
      return { ...reviews, [payload.id]: {
          name: payload.name,
          rating: payload.rating,
          text: payload.text,
          userId: payload.uuid
        }
      };
    default:
      return reviews;
  }
};
