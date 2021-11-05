import { replace } from 'connected-react-router';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  PLACE_ORDER,
  CHANGE_RESTAURANT,
  LOAD_RESTAURANTS,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  orderDataSelector,
} from './selectors';

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

const _sendRequest = (orderData) => {
  return fetch(`/api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  })
    .then(async (res) => {
      const responseData = await res.json();
      if (res.ok) {
        return responseData;
      }
      return Promise.reject(responseData)
    })
}

export const placeOrder = () => async (dispatch, getState) => {
  const state = getState();
  const orderData = orderDataSelector(state);

  try {
    dispatch({ type: PLACE_ORDER + REQUEST, orderData });
    _sendRequest(orderData)
      .then(res => {
        console.log(res)
        dispatch({ type: PLACE_ORDER + SUCCESS, result: res });
        dispatch(replace('/success'));
        setTimeout(() => dispatch(replace('/')), 3000);

      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: PLACE_ORDER + FAILURE, error: error });
        dispatch(replace('/error'));
        setTimeout(() => dispatch(replace('/')), 3000);
      })
  }

  catch (error) {
    console.log(error)
    dispatch({ type: PLACE_ORDER + FAILURE, error });
    dispatch(replace('/error'));
  }
}

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});
export const loadProducts = (restId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restId}`,
  restId,
});

const _loadUsers = () => ({ type: LOAD_USERS, CallAPI: '/api/users' });

export const loadReviews = (restId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restId });
  const loaded = reviewsLoadedSelector(state, { restId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restId });

  try {
    const data = await fetch(`/api/reviews?id=${restId}`).then((res) =>
      res.json()
    );
    dispatch({ type: LOAD_REVIEWS + SUCCESS, restId, data });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, restId, error });
    dispatch(replace('/error'));
  }
};

export const loadUsers = () => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch(_loadUsers());
};
