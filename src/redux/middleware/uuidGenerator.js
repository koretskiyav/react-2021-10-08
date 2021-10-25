import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from "../constants";

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    action.id = uuidv4();
    action.uuid = uuidv4();
    console.log("Action", action);
  }
  next(action);
};
