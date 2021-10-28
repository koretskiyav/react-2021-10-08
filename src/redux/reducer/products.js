import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';
const initialState = {
  loading: {},
  loaded: {},
  entities: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, id, error, data } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loaded[id] = false;
      draft.loading[id] = true;
      draft.error[id] = null;
      return draft;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      draft.loaded[id] = true;
      draft.loading[id] = false;
      draft.error[id] = false;
      return draft;
    case LOAD_PRODUCTS + FAILURE:
      draft.loaded[id] = false;
      draft.loading[id] = false;
      draft.error[id] = error;
      return draft;
    default:
      return draft;
  }
});
