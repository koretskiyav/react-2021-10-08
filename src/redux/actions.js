import { DECREMENT, INCREMENT, REMOVE, SUBMIT_FEEDBACK } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const submitFeedback = ({ restaurantId, name, rating, text }) => ({
  type: SUBMIT_FEEDBACK,
  restaurantId,
  name,
  rating,
  text,
});
