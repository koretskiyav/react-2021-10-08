import Rate from './rate';
import styles from './reviews.module.css';

function Reviews({ reviews, srRate }) {
  return (
    <div className={styles.wrapper}>
      <h3>Reviews</h3>
      <h4 className={styles.average}>
        Average rating: <Rate value={srRate} />
      </h4>
      <div className={styles.rev__list}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.rev}>
            <div className={styles.header}>
              <span>Author: {review.user}</span>
              <div className={styles.rate}>
                <span>Restorant rating:</span>
                <Rate value={review.rating} />
              </div>
            </div>
            <h4>Feedback:</h4>
            <div className={styles.content}>{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
