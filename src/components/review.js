import Rate from './rate';
import styles from './product.module.css';

export default function Review({ review }) {
  return (
    <div className={styles.card}>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate rate={review.rating} />
    </div>
  );
}
