import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  action.review.id = uuidv4();
  action.review.userId = uuidv4();
  next(action);
};
