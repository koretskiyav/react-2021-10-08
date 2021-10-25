import {normalizedReviews} from '../../fixtures';
import {ADD_REVIEW} from "../constants";

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({...acc, [review.id]: review}),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload, id, uuid} = action;
  console.log("Action params", action);

  switch (type) {
    case ADD_REVIEW:
      console.log("test", action);
      return { ...reviews, [id]: {
          name: payload.name,
          rating: payload.rating,
          text: payload.text,
          userId: uuid
        }
      };
    default:
      return reviews;
  }
};
