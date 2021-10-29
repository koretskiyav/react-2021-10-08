import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  CHANGE_RESTAURANT,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
} from './constants';

const loadedItems = {};

const load = async ({ url, eventName, dispatch, ...rest }) => {
  if (loadedItems[url]) return;

  dispatch({ type: eventName + REQUEST, ...rest });

  try {
    const data = await fetch(url).then((res) => res.json());
    dispatch({ type: eventName + SUCCESS, data, ...rest });
    loadedItems[url] = true;
  } catch (error) {
    dispatch({ type: eventName + FAILURE, error, ...rest });
  }
};

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const changeRestaurant = (activeId) => ({
  type: CHANGE_RESTAURANT,
  activeId,
});

export const addReview = (review, restId) => ({
  type: ADD_REVIEW,
  review,
  restId,
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (id) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${id}`,
});

export const loadReviews = (restId) => async (dispatch) => {
  await load({
    url: `/api/reviews?id=${restId}`,
    eventName: LOAD_REVIEWS,
    dispatch,
    restId,
  });
};

export const loadUsers = () => async (dispatch) => {
  await load({
    url: '/api/users',
    eventName: LOAD_USERS,
    dispatch,
  });
};
