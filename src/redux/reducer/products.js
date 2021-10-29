import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, data, error, restId } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      console.log('req');
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCTS + SUCCESS:
      console.log('suc');
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_PRODUCTS + FAILURE:
      console.log('fail');
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
