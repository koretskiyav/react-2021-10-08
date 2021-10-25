import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import {getReviewsSelector, getUsersSelector} from "../../redux/selectors";

const Reviews = ({ reviews, users }) => {
  return (
    <div className={styles.reviews}>

      {reviews.map((review) => (
        <Review key={review.id} review={review} user={users[review.userId]} />
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

const mapStateToProps = (state) => ({
  reviews: getReviewsSelector(state),
  users: state.users,
});

export default connect(mapStateToProps)(Reviews);
