import Rate from "./rate";
import styles from './reviews.module.css';


export default function  Review({ review }) {
  return (
    <div className={styles.container}>
      <p><span className={styles.span}>{review.user}</span></p>
      <p>{review.text}</p>
      <Rate rating={review.rating} />
    </div>
  );
}