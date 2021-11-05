import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const productsSelector = (state) => state.products.entities;
const orderSelector = (state) => state.order.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const activeRestaurantIdSelector = (state) => state.restaurants.activeId;
export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const orderLoadingSelector = (state) => state.order.loading;
export const orderErrorSelector = (state) => state.order.error;

export const productsLoadingSelector = (state, props) =>
  state.products.loading[props.restId];
export const productsLoadedSelector = (state, props) =>
  state.products.loaded[props.restId];

export const reviewsLoadingSelector = (state, props) =>
  state.reviews.loading[props.restId];
export const reviewsLoadedSelector = (state, props) =>
  state.reviews.loaded[props.restId];

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

const restaurantsIdsByProductsSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    restaurants
      .flatMap((rest) =>
        rest.menu.map((productId) => ({ productId, restId: rest.id }))
      )
      .reduce(
        (acc, { productId, restId }) => ({ ...acc, [productId]: restId }),
        {}
      )
);

export const orderProductsSelector = createSelector(
  orderSelector,
  productsSelector,
  restaurantsIdsByProductsSelector,
  (order, products, restaurantsIds) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
        restId: restaurantsIds[product.id],
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
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantSelector,
  (reviews, restaurant) => {
    const ratings = restaurant.reviews.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  }
);

export const orderDataSelector = createSelector(orderSelector, (order) =>
  Object.entries(order).map(([id, amount]) => ({ id, amount }))
);
