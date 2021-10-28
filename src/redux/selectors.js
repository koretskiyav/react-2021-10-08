import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const reviewsRootSelector = (state) => state.reviews;
const orderSelector = (state) => state.order;
const usersSelector = (state) => state.users;

export const activeIdRestaurantSelector = (state) => state.restaurants.activeId;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const reviewsLoadingSelector = (state, props) => {
  return state.reviews.loading[props.id];
};

export const reviewsLoadedSelector = (state, { id }) =>
  state.reviews.loaded[id];

export const productsLoadingSelector = (state, { id }) => {
  return state.products.loading[id];
};

export const productsLoadedSelector = (state, { id }) =>
  state.products.loaded[id];

export const usersLoadingSelector = (state) => state.users.loading;

export const usersLoadedSelector = (state) => state.users.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
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
  (review, users) => ({
    ...review,
    user: users.entities[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsRootSelector,
  reviewsSelector,
  restaurantSelector,
  (reviewsRoot, reviews, restaurant) => {
    const restId = restaurant.id;
    if (!reviewsRoot.loaded[restId]) return 0;

    const ratings = restaurant.reviews.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);
