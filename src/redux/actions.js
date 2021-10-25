import { DECREMENT, INCREMENT, REMOVE, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const addReview = (name, text, rating) => ({ type: ADD_REVIEW, name, text, rating});
