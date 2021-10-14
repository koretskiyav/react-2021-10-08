import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review) => (
        <div className={styles.card} key={review.id}>
          <div className={styles.name}>{review.user}</div>
          <div>{review.text}</div>
          <Rate amount={review.rating} />
        </div>
      ))}
    </>
  );
}
