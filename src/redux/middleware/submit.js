import { v4 as uuidv4 } from 'uuid';
import { SUBMIT_FORM } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type !== SUBMIT_FORM) {
    return;
  }

  const userId = uuidv4();
  const reviewId = uuidv4();
  const restaurant = {
    ...action.form.restaurant,
  };

  restaurant.reviews.push(reviewId);

  const patchedAction = {
    ...action,
    user: {
      id: userId,
      name: action.form.name || 'Anonymous',
    },
    review: {
      id: reviewId,
      userId: userId,
      text: action.form.text,
      rating: action.form.rating,
    },
    restaurant,
  };

  next(patchedAction);
};
