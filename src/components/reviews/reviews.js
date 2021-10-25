import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';

const Reviews = ({ reviewids, reviews, restid }) => {
  return (
    <div className={styles.reviews}>
      {reviewids.map((review) => (
        <Review key={review} rw={reviews[review]} />
      ))}
      <ReviewForm restid={restid} />
    </div>
  );
};

Reviews.propTypes = {
  reviewids: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Reviews);
