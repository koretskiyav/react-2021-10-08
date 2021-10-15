import { useMemo } from 'react';
import Menu from '../menu';
import Reviews from '../Reviews';
import Rate from '../Rate';

export default function Restaurant({ menu, reviews }) {
  const midRating = useMemo(
    () =>
      reviews.reduce((array, currentVal) => {
        return array + currentVal.rating;
      }, 0) / reviews.length,
    [reviews]
  );

  return (
    <div>
      <div>
        <h2>Рейтинг ресторана</h2>
        <Rate value={midRating} />
      </div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
