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

export default produce((draft = initialState, action) => {
  const { type, id, reviewId, activeId, data, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      return draft;
    case LOAD_RESTAURANTS + SUCCESS:
      draft.activeId = data[0].id;
      draft.entities = arrToMap(data);
      draft.loading = false;
      draft.loaded = true;
      return draft;
    case LOAD_RESTAURANTS + FAILURE:
      draft.loading = false;
      draft.loaded = false;
      draft.error = error;
      return draft;
    case CHANGE_RESTAURANT:
      draft.activeId = activeId;
      return draft;
    case ADD_REVIEW:
      draft.entities[id].reviews.push(reviewId);
      return draft;
    default:
      return draft;
  }
});
