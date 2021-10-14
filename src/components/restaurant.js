import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const rating = Math.round(restaurant.reviews.reduce((sum, { rating }) => sum + rating, 0) / restaurant.reviews.length)
  return (
    <div>
      <Rate value={rating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
