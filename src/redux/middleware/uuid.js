import { v4 as uuid4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const { type, review } = action;

  switch (type) {
    case ADD_REVIEW:
      const userId = uuid4();
      const { text, rating, name } = review;
      const { restaurant } = store.getState();

      action = {
        ...action,
        review: { id: uuid4(), userId, text, rating },
        user: { id: userId, name: name || 'Anonymous' },
        restaurant,
      };
      break;

    default:
      break;
  }
  next(action);
};
