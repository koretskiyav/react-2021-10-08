import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const restaurantsSelector = (state) => state.restaurants;
export const reviewsSelector = (state) => state.reviews;
export const usersSelector = (state) => state.users;

export const productSelector = (state, id) => productsSelector(state)[id];

export const restaurantSelector = (state, id) => restaurantsSelector(state)[id];

export const reviewSelector = (state, id) => reviewsSelector(state)[id];

export const userSelector = (state, id) => usersSelector(state)[id]?.name;

export const amountSelector = (state, id) => orderSelector(state)[id] || 0;

export const averageRatingSelector = createSelector(
  (state, reviews) =>
    reviews.map((reviewId) => reviewSelector(state, reviewId)),
  (restaurantReviews) => {
    const total = restaurantReviews.reduce(
      (acc, { rating }) => acc + rating,
      0
    );
    return Math.round(total / restaurantReviews.length);
  }
);

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
export const tabsSelector = createSelector(restaurantsSelector, (restaurants) =>
  Object.values(restaurants).map(({ id, name }) => ({ id, label: name }))
);

export const restaurantListSelector = createSelector(
  restaurantsSelector,
  (restaurants) => Object.keys(restaurants)
);
