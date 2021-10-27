import { normalizedProducts } from '../../fixtures';
import produce from 'immer';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  activeId: null,
  loading: false,
  loaded: false,
  entities: {},
  error: null,
};

export default produce((draft = arrToMap(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return draft;
  }
});
