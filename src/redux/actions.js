import { DECREMENT, INCREMENT, ADD, DEL } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const add = (id) => ({ type: ADD, id });
export const del = (id) => ({ type: DEL, id });
