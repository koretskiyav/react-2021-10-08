import Rate from './rate';
import styles from './review.module.css';

export default function Review({ review }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h5>{review.user}</h5>
        <Rate value={review.rating} />
      </div>

      <p>{review.text}</p>
    </div>
  );
}
