export default function productHashCreator(restaurants) {
  const flatedArray = restaurants.map((restaurant) => restaurant.menu).flat(1);
  const productHash = flatedArray.reduce(
    (prev, current) => ({ ...prev, [current.id]: { ...current } }),
    {}
  );

  return productHash;
}
