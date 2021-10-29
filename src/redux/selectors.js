import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;
const reviewsObject = (state) => state.reviews;

export const activeIdRestaurantSelector = (state) => state.restaurants.activeId;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;
export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);
export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];

export const productSelector = (state, { id }) => productsSelector(state)[id];
export const productLoadingSelector = (state, { restId }) => {
  return state.products.loading[restId];
};
export const productLoadedSelector = (state, { restId }) =>
  state.products.loaded[restId];

export const reviewSelector = (state, { id }) => {
  return reviewsSelector(state)[id];
};
export const reviewLoadingSelector = (state, { restId }) => {
  return state.reviews.loading[restId] || false;
};
export const reviewLoadedSelector = (state, { restId }) => {
  return state.reviews.loaded[restId] || false;
};

export const reviewLoadedUsers = (state) => {
  return state.users.loaded;
};
export const reviewLoadingUsers = (state) => {
  return state.users.loading;
};

export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
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

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => {
    console.log(review);
    console.log(users);
    return {
      ...review,
      user: users[review.userId]?.name,
    };
  }
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantSelector,
  reviewsObject,
  (reviews, restaurant, review) => {
    if (!review.loaded[restaurant.id]) return 3;
    const ratings = restaurant.reviews.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
