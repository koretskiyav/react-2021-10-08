import { DECREMENT, INCREMENT, DROPFROMBASKET } from './constants';

export const increment = (id) => ({ type: INCREMENT, id });
export const decrement = (id) => ({ type: DECREMENT, id });
export const dropfrombasket = (id) => ({ type: DROPFROMBASKET, id });
