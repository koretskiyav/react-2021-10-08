import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import { useMemo } from 'react';

export default function Restaurant({ restaurant }) {
  const { reviews, menu } = restaurant;

  const rating = useMemo(() => {
    if (reviews.length === 0) {
      return 0;
    } else {
      return Math.round(
        reviews.reduce((val, review) => val + review.rating, 0) / reviews.length
      );
    }
  }, [reviews]);

  return (
    <div>
      <div>
        <h2>Restaurant rating</h2>
        <Rate value={rating} />
      </div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
