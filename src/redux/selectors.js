import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;

export const restaurantSelectorById = (state, props) =>
  state.restaurants[props.restaurantId];

const reviewsSelectorByRestaurantId = (state, props) => {
  return state.restaurants[props.restaurantId].reviews.map(
    (reviewId) => state.reviews[reviewId]
  );
};

export const orderSelectorById = (state, props) => state.order[props.id] || 0;
export const productSelectorById = (state, props) => state.products[props.id];
export const reviewSelectorById = (state, props) => {
  const review = state.reviews[props.id];
  return {
    text: review.text,
    rating: review.rating,
    user: state.users[review.userId].name || 'Anonymous',
  };
};

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

export const tabsSelector = createSelector(
  [restaurantsSelector],
  (restaurants) =>
    Object.entries(restaurants).map(([id, restaurant]) => ({
      id,
      label: restaurant.name,
    }))
);

export const averageRatingSelector = createSelector(
  [reviewsSelectorByRestaurantId],
  (reviews) => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }
);
