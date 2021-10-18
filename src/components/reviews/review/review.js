import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (
  <div data-id="review" className={styles.review}>
    <div className={styles.content}>
      <div>
        <h4 data-id="review-name" className={styles.name}>{user}</h4>
        <p data-id="review-text" className={styles.comment}>{text}</p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.defaultProps = {
  user: 'Anonymous',
};

export default Review;
