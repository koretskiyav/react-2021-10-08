export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getInitialState = () => ({
  loading: false,
  loaded: false,
  entities: {},
  error: null,
});
