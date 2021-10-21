import { ORDER_UPDATE } from '../constants';

const count = (order, productList) => {
  const itemsTotal = Object.entries(order).reduce(
    (acc, [id, amount]) => ({ ...acc, [id]: productList[id].price * amount }),
    {}
  );
  const orderTotal = Object.values(itemsTotal).reduce(
    (acc, value) => acc + value
  );

  return {
    orderTotal,
    itemsTotal,
  };
};

export default function (state = {}, action) {
  const { type, order = {}, productList = {} } = action;

  switch (type) {
    case ORDER_UPDATE:
      return count(order, productList);
    default:
      return state;
  }
}
