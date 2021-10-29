import { LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap, getInitialState } from '../utils';

const initialState = getInitialState();

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return { ...state, loading: true, loaded: false, error: null };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(data) },
        loading: false,
        loaded: true,
      };
    default:
      return state;
  }
};
