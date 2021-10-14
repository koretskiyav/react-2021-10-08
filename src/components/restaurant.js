import Reviews from './reviews';
import Rate from './rate';
import Menu from './menu';
import styles from './restaurant.module.css';

export default function Restaurant({ active }) {
  const rating = active.reviews.map((review) => review.rating);

  const summreview = rating.reduce((a, b) => a + b, 0);
  const averangeReview = Math.round(summreview / rating.length);
  console.log(averangeReview);
  return (
    <div>
      <Menu menu={active.menu} />
      <div className={styles.card}>
        <h1>Averange review</h1>
        <Rate amount={averangeReview} />
      </div>
      <Reviews reviews={active.reviews} />
    </div>
  );
}
