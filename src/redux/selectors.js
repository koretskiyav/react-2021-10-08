import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const restsSelector = (state) => state.restaurants;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const userSelector = (state, id) => usersSelector(state)[id];
export const revSelector = (state) => reviewsSelector(state);
export const prodSelector = (state, id) => productsSelector(state)[id];
export const prodAmountSelector = (state, id) => orderSelector(state)[id] || 0;
export const restSelector = (state) => restsSelector(state);
export const orderProductsSelector = createSelector(
  orderSelector,
  productsSelector,
  (order, products) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
