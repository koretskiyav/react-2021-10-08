import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';
import { reviewsLoadedSelector } from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({ reviews, restId, loadReviews, reviewsLoaded }) => {
  useEffect(() => {
    loadReviews(restId);
  }, [restId, loadReviews]);

  if (!reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoaded: reviewsLoadedSelector(state, props),
});

const mapDispatchToProps = { loadReviews };

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
