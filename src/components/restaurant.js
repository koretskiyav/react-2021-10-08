import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const calcRating = (restaurant) => {
    const reviews = Object.values(restaurant.reviews);
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum = sum + reviews[i].rating;
    }
    return Math.round(sum / reviews.length);
  };

  return (
    <div>
      <div>Restaurant: {restaurant.name}</div>
      <Rate rating={calcRating(restaurant)} maxRating={5} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}></Reviews>
    </div>
  );
}
