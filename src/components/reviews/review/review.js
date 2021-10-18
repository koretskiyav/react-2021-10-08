import PropTypes from 'prop-types';
import Rate from '../../rate';

import styles from './review.module.css';

const propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number
};

const defaultProps = {
  user: 'Anonymous',
};

const Review = ({ user, text, rating }) => (
  <div className={styles.review}>
    <div className={styles.content} data-id="review-content">
      <div>
        <h4 className={styles.name} data-id="review-content-user">{user}</h4>
        <p className={styles.comment} data-id="review-content-text">{text}</p>
      </div>
      <div className={styles.rate} data-id="review-content-rate">
        <Rate value={rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = propTypes;
Review.defaultProps = defaultProps;

export default Review;
