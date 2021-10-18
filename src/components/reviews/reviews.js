import Review from './review';
import styles from './reviews.module.css';
import propTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div data-id="review" className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: propTypes.array.isRequired,
};
