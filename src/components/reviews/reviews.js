import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import { reviewDetailsSelector } from '../../redux/selectors';
import { connect } from 'react-redux';

const Reviews = ({ reviewDetails }) => {
  return (
    <div className={styles.reviews}>
      {reviewDetails.map((review) => (
        <Review key={review.id} {...review} />
      ))}
      <ReviewForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  reviewDetails: reviewDetailsSelector(state),
});

export default connect(mapStateToProps)(Reviews);
