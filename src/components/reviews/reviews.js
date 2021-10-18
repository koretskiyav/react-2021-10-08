import Review from './review';
import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews} data-id="reviews-app">
      {reviews.map((review) => (
        <Review data-id="reviews-list" key={review.id} {...review} />
      ))}
    </div>
  );
};

Review.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
