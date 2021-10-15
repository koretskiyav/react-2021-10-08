import Rate from './rate';
import styles from './reviews.module.css';

export default function Rewiews ({ reviews }) {
  return (
    reviews.map((review) => {
      const { user, rating, text, id } = review;

      return (
        <div className={styles.card} key={id}>
          <p>{user}</p>
          <Rate rating={rating} />
          <p>{text}</p>
        </div>
      );
    })
  );
};