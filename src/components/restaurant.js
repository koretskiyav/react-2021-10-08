import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import styles from './restaurant.module.css';

export default function Restaurant({ restaurant }) {
  let countReviews = restaurant.reviews.length;
  let averageRating = 0;
  let initialValue = 0;
  let total = restaurant.reviews.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.rating;
  }, initialValue);

  averageRating = Math.floor(total / countReviews);

  return (
    <div>
      <div className={styles.rating}>
        <span className={styles.text}>Customers rating is</span>

        <Rate value={averageRating} />
      </div>

      <Reviews reviews={restaurant.reviews} />

      <Menu menu={restaurant.menu} />
    </div>
  );
}
