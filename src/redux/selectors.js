const productsSelector = (state) =>
  state.restaurants.flatMap((restaurant) => restaurant.menu);

export const orderProductsSelector = (state) =>
  Object.keys(state.order)
    .filter((productId) => state.order[productId] > 0)
    .map((productId) =>
      productsSelector(state).find((product) => product.id === productId)
    )
    .map((product) => ({
      product,
      amount: state.order[product.id],
      subtotal: state.order[product.id] * product.price,
    }));

export const totalSelector = (state) =>
  orderProductsSelector(state).reduce((acc, { subtotal }) => acc + subtotal, 0);
