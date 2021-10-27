import {
  LOAD_PRODUCTS,
  FAILURE,
  REQUEST,
  SUCCESS,
  CHANGE_RESTAURANT,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCTS + SUCCESS: {
      return {
        ...state,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    }
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case CHANGE_RESTAURANT:
      return { ...state, loaded: false };
    default:
      return state;
  }
};
