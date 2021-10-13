import { useMemo } from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

const Restaurant = ({ activeRestaurant: { menu, reviews } }) => {
  const rating = useMemo(
    () =>
      reviews.reduce((prev, { rating }) => prev + rating, 0) / reviews.length,
    [reviews]
  );

  return (
    <>
      <Rate value={rating} className="restaurant-rating" />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </>
  );
};

export default Restaurant;
