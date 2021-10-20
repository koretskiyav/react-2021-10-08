import { DECREMENT, INCREMENT, CLEAR } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const clear = (id) => ({ type: CLEAR, id });
