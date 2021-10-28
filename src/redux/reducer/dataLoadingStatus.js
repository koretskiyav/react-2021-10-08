import produce from 'immer';
import {
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';

export default produce((draft = {}, action) => {
  const { type, data, restId, error } = action;
  switch (type) {
    case LOAD_RESTAURANTS + SUCCESS:
      draft.restaurants = {
        ...data.reduce(
          (acc, { id }) => ({
            ...acc,
            [id]: {
              products: {
                loading: false,
                loaded: false,
                error: null,
              },
              reviews: {
                loading: false,
                loaded: false,
                error: null,
              },
            },
          }),
          {}
        ),
      };
      break;
    case LOAD_PRODUCTS + REQUEST:
      draft.restaurants[restId].products = {
        loading: true,
        loaded: false,
        error: null,
      };
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.restaurants[restId].products = {
        loading: false,
        loaded: true,
      };
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.restaurants[restId].products = {
        loading: false,
        loaded: false,
        error,
      };
      break;

    default:
      return draft;
  }
});
