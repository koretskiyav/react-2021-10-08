import { DECREMENT, INCREMENT, REMOVE, CREATEREVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const remove = (id) => ({ type: REMOVE, id });
export const createreview = (review) => ({ type: CREATEREVIEW, review });
