import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { connect } from 'react-redux';
import { totalReviewsSelector } from '../../redux/selectors';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// const mapStateToProps = (state, props) => ({
//   review: state.reviews[props.id],
// });

// export default connect(mapStateToProps)(Reviews);

export default connect((state) => {
  return {
    reviews: totalReviewsSelector(state),
  };
})(Reviews);
