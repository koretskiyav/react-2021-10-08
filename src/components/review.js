import Rate from './rate.js';
import styles from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={styles.review}>
      <div className={styles.user}>{review.user}</div>
      <Rate rating={review.rating} maxRating={5} />
      <div>{review.text}</div>
    </div>
  );
}
