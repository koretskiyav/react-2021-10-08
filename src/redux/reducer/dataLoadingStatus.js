import produce from 'immer';
import {
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
} from '../constants';

const defaultState = {
  users: {
    loading: false,
    loaded: false,
    error: null,
  },
};

export default produce((draft = defaultState, action) => {
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
        error: null,
      };
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.restaurants[restId].products = {
        loading: false,
        loaded: false,
        error,
      };
      break;
    case LOAD_REVIEWS + REQUEST:
      draft.restaurants[restId].reviews = {
        loading: true,
        loaded: false,
        error: null,
      };
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.restaurants[restId].reviews = {
        loading: false,
        loaded: true,
        error: null,
      };
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.restaurants[restId].reviews = {
        loading: false,
        loaded: false,
        error,
      };
      break;
    case LOAD_USERS + REQUEST:
      draft.users = {
        loading: true,
        loaded: false,
        error: null,
      };
      break;
    case LOAD_USERS + SUCCESS:
      draft.users = {
        loading: false,
        loaded: true,
        error: null,
      };
      break;
    case LOAD_USERS + FAILURE:
      draft.users = {
        loading: false,
        loaded: false,
        error,
      };
      break;
    default:
      return draft;
  }
});
