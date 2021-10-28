import { ADD_REVIEW, LOAD_USERS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

//export default produce((draft = {}, action) => {
export default (state = {}, action) => {
  const { type, review, userId, data } = action;

  switch (type) {
    case LOAD_USERS + SUCCESS:
      return { ...state, ...arrToMap(data) };
    case ADD_REVIEW:
      const { name } = review;
      return {
        ...state,
        [userId]: { id: userId, name },
      };
    default:
      return state;
  }
};
