import { DECREMENT, INCREMENT, REMOVE, ORDER_UPDATE } from '../constants';

const createAction = (type) => (id) => (dispatch, getState) => {
  dispatch({ type, id });

  const { order, productList } = getState();
  dispatch({ type: ORDER_UPDATE, order, productList });
};

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const remove = createAction(REMOVE);
