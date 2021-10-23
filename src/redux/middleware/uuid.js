import { v4 as uuid4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  let userId = uuid4();
  const { type, review } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating, name } = review;
      const { restaurant } = store.getState();

      action = {
        ...action,
        review: { id: uuid4(), userId, text, rating },
        user: { id: userId, name },
        restaurant,
      };
      break;

    default:
      break;
  }
  next(action);
};
