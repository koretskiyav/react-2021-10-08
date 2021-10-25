import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, allReviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} {...allReviews[id]} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  allReviews: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
