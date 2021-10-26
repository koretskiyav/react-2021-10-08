import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsListSelector = (state) => state.products;
const orderListSelector = (state) => state.order;
const restaurantsListSelector = (state) => state.restaurants;
const reviewsListSelector = (state) => state.reviews;
const usersListSelector = (state) => state.users;

export const orderProductsSelector = createSelector(
  orderListSelector,
  productsListSelector,
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

export const userSelector = createSelector(
  usersListSelector,
  reviewsListSelector,
  (usersList, reviewsList) => {
    return function (id) {
      const review = reviewsList[id];
      const user = usersList[review.userId].name;
      return user;
    };
  }
);

export const reviewsSelector = createSelector(
  reviewsListSelector,
  (reviewsList) => {
    return function (id) {
      return reviewsList[id];
    };
  }
);

export const productSelector = createSelector(
  productsListSelector,
  (productList) => {
    return function (id) {
      return productList[id];
    };
  }
);

export const productAmountSelector = createSelector(
  orderListSelector,
  (orderList) => {
    return function (id) {
      return orderList[id] || 0;
    };
  }
);

export const averageRatingSelector = createSelector(
  restaurantsListSelector,
  reviewsListSelector,
  (restaurantList, reviewsList) => {
    return function (restaurantId) {
      const restaurant = restaurantList[restaurantId];
      const sum = restaurant.reviews
        .map((reviewId) => reviewsList[reviewId])
        .reduce((acc, { rating }) => acc + rating, 0);
      const averageRating = Math.round(sum / restaurant.reviews.length);
      return averageRating;
    };
  }
);

export const tabsSelector = createSelector(
  restaurantsListSelector,
  (restaurants) =>
    Object.values(restaurants).map(({ id, name }) => ({ id, label: name }))
);

export const restaurantsSelector = createSelector(
  restaurantsListSelector,
  (restaurantList) => Object.keys(restaurantList)
);

export const restaurantSelector = createSelector(
  restaurantsListSelector,
  (restaurantList) => {
    return function (restaurantId) {
      return restaurantList[restaurantId];
    };
  }
);
