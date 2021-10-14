import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  let userReviews = reviews.map((item) => {
    return (
      <div key={item.id} className={styles.item}>
        <Rate value={item.rating} />
        <span className={styles.text}>{item.text}</span>
        <span className={styles.author}>{item.user}</span>
      </div>
    );
  });

  return <div className={styles.reviews}>{userReviews}</div>;
}
