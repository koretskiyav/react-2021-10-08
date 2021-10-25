import { v4 as uuidv4 } from 'uuid';

import { PROCESS_REVIEW } from '../constants';
import { addReview, addUser } from '../actions';

export default (store) => (next) => (action) => {
  const { type } = action;

  switch (type) {
    case PROCESS_REVIEW:
      const userId = uuidv4();
      const { activeRestaurantId } = store.getState();
      const {
        values: { text, rating, name },
      } = action;

      const user = { id: userId, name };
      const review = { id: uuidv4(), userId, text, rating };

      next(addUser(user));
      next(addReview(review, activeRestaurantId));

      break;
    default:
      next(action);
      break;
  }
};
