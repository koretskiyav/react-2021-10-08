import { FETCH_ORDER, REQUEST, SUCCESS } from '../constants';

const initialState = {
  loading: false,
  error: null,
  value: null,
};

// { [productId]: amount }
export default function (state = initialState, action) {
  const { type, data, error } = action;
  switch (type) {
    case FETCH_ORDER + REQUEST:
      console.log('req fetch');
      return { ...state, loading: true, error: null };
    case FETCH_ORDER + SUCCESS:
      console.log('suc fetch');
      return {
        ...state,
        value: data,
        loading: false,
      };
    default:
      return state;
  }
}
