import { DECREMENT, INCREMENT, REMOVE } from './constants';

export const increment = (id, name, price) => ({ type: INCREMENT, id, name, price });
export const decrement = (id, name, price) => ({ type: DECREMENT, id, name, price });
export const remove = (id) => ({ type: REMOVE, id });
