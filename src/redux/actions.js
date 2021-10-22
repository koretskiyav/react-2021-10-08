import { DECREMENT, INCREMENT, REMOVE } from './constants';

export const increment = (product) => ({ type: INCREMENT, product });
export const decrement = (product) => ({ type: DECREMENT, product });
export const remove = (product) => ({ type: REMOVE, product });
