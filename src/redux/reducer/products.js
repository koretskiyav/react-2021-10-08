import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loaded: {},
  loading: {},
  error: {},
};

export default produce((draft = initialState, action) => {
  const { type, data, error, restId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loaded[restId] = false;
      draft.loading[restId] = true;
      draft.error[restId] = null;
      return draft;

    case LOAD_PRODUCTS + SUCCESS:
      draft.loaded[restId] = true;
      draft.loading[restId] = false;
      draft.error[restId] = null;
      draft.entities = {
        ...draft.entities,
        ...arrToMap(data),
      };
      return draft;

    case LOAD_PRODUCTS + FAILURE:
      draft.loaded[restId] = false;
      draft.loading[restId] = false;
      draft.error[restId] = error;
      return draft;

    default:
      return draft;
  }
});
