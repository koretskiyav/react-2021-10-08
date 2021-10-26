import produce from 'immer';
import {
  ADD_REVIEW,
  CHANGE_RESTAURANT,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  activeId: null,
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, restId, reviewId, activeId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return { ...state, loading: true, error: null };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        activeId: data[0].id,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    case CHANGE_RESTAURANT:
      return { ...state, activeId };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
