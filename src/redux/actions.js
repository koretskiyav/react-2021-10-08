import { replace } from 'connected-react-router';
import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  CHANGE_RESTAURANT,
  LOAD_PRODUCTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
  SEND_ORDER,
} from './constants';

import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  productsToOrderSelector,
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

export const sendOrderRequest = () => async (dispatch, getState) => {
  const state = getState();
  if (state.router.location.pathname === '/checkout') {
    dispatch({ type: SEND_ORDER + REQUEST });
    try {
      const result = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productsToOrderSelector(state)),
      });

      const data = await result.json();

      if (result.status === 400) {
        const error = data;
        dispatch({ type: SEND_ORDER + FAILURE, error });
        dispatch(replace('/failedOrder'));
      } else {
        if (data === 'ok') {
          dispatch({
            type: SEND_ORDER + SUCCESS,
            data,
          });
          dispatch(replace('/successOrder'));
        }
      }
    } catch (error) {
      dispatch({ type: SEND_ORDER + FAILURE, error });
      dispatch(replace('/error'));
    }
  }
};
