import { LOAD_PRODUCTS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

export default (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        ...arrToMap(data),
      };

    default:
      return state;
  }
};
