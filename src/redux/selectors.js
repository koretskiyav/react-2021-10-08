import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

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

export const getReviewsSelector = createSelector(
  [reviewsSelector],
  (reviewsSelector) =>
    Object.keys(reviewsSelector).map((reviewId) => reviewsSelector[reviewId])

);

export const getUsersSelector = createSelector(
  [usersSelector],
  (usersSelector) =>
    Object.keys(usersSelector).map((userId) => usersSelector[userId])
);
