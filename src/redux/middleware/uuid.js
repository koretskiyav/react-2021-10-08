import { v4 as uuidv4 } from 'uuid';
import { SUBMIT_FEEDBACK } from '../constants';

export default () => (next) => (action) => {
  if (action.type === SUBMIT_FEEDBACK) {
    action.id = uuidv4();
    action.userId = uuidv4();
  }
  next(action);
};
