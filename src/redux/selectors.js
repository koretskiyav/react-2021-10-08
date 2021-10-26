import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;

export const reviewsSelector = (state) => state.reviews;
export const usersSelector = (state) => state.users;

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

export const reviewSelector = (state, id, review = state.reviews[id]) => ({
  ...review,
  user: state.users[review.userId]?.name
});

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const averageRatingSelector = (state, { reviews }) => {
  const total = reviews.reduce((acc, id) => acc + state.reviews[id].rating, 0);
  return Math.round(total / reviews.length);
};

export const amountSelector = (state, props) => state.order[props.id] || 0;
export const productSelector = (state, props) => state.products[props.id];