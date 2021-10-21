import { PRODUCT_LIST_UPDATE } from '../constants';

export default function (state = {}, action) {
  const { type, products } = action;

  switch (type) {
    case PRODUCT_LIST_UPDATE:
      return { ...products };
    default:
      return state;
  }
}
