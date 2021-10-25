import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const restaurantListSelector = (state) => state.restaurantList;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const activeRestaurantSelector = createSelector(
  [restaurantsSelector, restaurantListSelector],
  (restaurants, restaurantsList) => {
    return restaurants[restaurantsList.find((val) => val.isActive).id];
  }
);

export const restaurantListNameSelector = createSelector(
  [restaurantsSelector, restaurantListSelector],
  (restaurants, restaurantList) => {
    return restaurantList.map((val) => ({
      id: val.id,
      label: restaurants[val.id].name,
    }));
  }
);

export const restaurantActiveIdSelector = createSelector(
  restaurantListSelector,
  (restaurantList) => {
    return restaurantList.find((val) => val.isActive).id;
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

export const productAmountByIdSelector = createSelector(
  orderSelector,
  (order) => {
    return function (id) {
      return order[id] || 0;
    };
  }
);

export const productByIdSelector = createSelector(
  productsSelector,
  (products) => {
    return function (id) {
      return products[id];
    };
  }
);

export const reviewDetailsSelector = createSelector(
  [activeRestaurantSelector, reviewsSelector, usersSelector],
  (activeRestaurant, reviews, users) => {
    return activeRestaurant.reviews.map((reviewId) => {
      const review = reviews[reviewId];
      return {
        id: reviewId,
        user: users[review.userId].name,
        text: review.text,
        rating: review.rating,
      };
    });
  }
);

export const averageRestaurantRatingById = createSelector(
  [activeRestaurantSelector, reviewsSelector],
  (activeRestaurant, reviews) => {
    const restaurantReviews = activeRestaurant.reviews;
    const total = restaurantReviews
      .map((reviewId) => reviews[reviewId])
      .reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / restaurantReviews.length);
  }
);
