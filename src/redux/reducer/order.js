import { DECREMENT, INCREMENT, REMOVE, PLACE_ORDER, REQUEST, SUCCESS, FAILURE } from '../constants';

const defaultState = {
  error: null,
  loading: false,
}
// { [productId]: amount }
export default function (state = defaultState, action) {
  const { type, id, error } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: state[id] > 0 ? (state[id] || 0) - 1 : 0 };
    case REMOVE:
      return { ...state, [id]: 0 };
    case PLACE_ORDER + REQUEST:
      return { ...state, loading: true, };
    case PLACE_ORDER + SUCCESS:
      return { ...state, };
    case PLACE_ORDER + FAILURE:
      return { ...state, error, };
    default:
      return state;
  }
}
