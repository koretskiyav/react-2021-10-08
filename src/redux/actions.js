import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SET_ACTIVE_RESTAURANT,
  SUBMIT_FORM,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const setActiveRestaurant = (id) => ({
  type: SET_ACTIVE_RESTAURANT,
  id,
});
export const submitForm = (form) => ({ type: SUBMIT_FORM, form });
