import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant ({ restaurant: { reviews, name, menu } }) {
  const getRating = () => {
    let rating = 0;

    reviews.forEach((review) => {
      rating += review.rating;
    })

    return Math.round(rating/reviews.length);
  };

  return (
    <div>
      <h3>
        {name}
        <Rate rating={getRating()}/>
      </h3>
      <div>
        <h4>Menu</h4>
        <Menu menu={menu} />
      </div>
      <div>
        <h4>Review</h4>
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};