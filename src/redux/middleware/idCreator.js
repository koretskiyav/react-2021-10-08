import { v4 as uuidv4 } from 'uuid';
import { SUBMIT } from '../constants';
export default (store) => (next) => (action) => {
  if (action.type === SUBMIT) {
    const reviewId = uuidv4();
    const userId = uuidv4();

    action.values.userId = userId;
    action.values.id = reviewId;

    next(action);
  }

  return;
};
