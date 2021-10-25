import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SET_ACTIVE_RESTAURANT,
  PROCESS_REVIEW,
  ADD_REVIEW,
  ADD_USER,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });

export const setActiveRestaurantId = (id) => ({
  type: SET_ACTIVE_RESTAURANT,
  id,
});

export const processReview = (values) => ({ type: PROCESS_REVIEW, values });
export const addReview = (review, activeRestaurantId) => ({
  type: ADD_REVIEW,
  review,
  activeRestaurantId,
});

export const addUser = (user) => ({ type: ADD_USER, user });
