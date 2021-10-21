import { PRODUCT_LIST_UPDATE } from '../constants';

export const setProducts = (restaurants) => (dispatch) => {
  const products = restaurants
    .flatMap(({ menu }) => menu)
    .reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

  dispatch({ type: PRODUCT_LIST_UPDATE, products });
};
