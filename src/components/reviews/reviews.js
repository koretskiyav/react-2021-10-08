import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import Loader from '../loader';

import { loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  restId,
  loadUsers,
  usersLoading,
  usersLoaded,
  reviewsLoading,
  reviewsLoaded,
}) => {
  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, [usersLoading, usersLoaded, loadUsers]);

  const reviewsEls =
    reviewsLoading || usersLoading ? (
      <Loader />
    ) : !reviewsLoaded || !usersLoaded ? (
      'no data :('
    ) : (
      reviews.map((id) => <Review key={id} id={id} />)
    );

  return (
    <div className={styles.reviews}>
      {reviewsEls}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loadUsers: PropTypes.func.isRequired,
  usersLoading: PropTypes.bool,
  usersLoaded: PropTypes.bool,
  reviewsLoading: PropTypes.bool,
  reviewsLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
  reviewsLoading: reviewsLoadingSelector(state),
  reviewsLoaded: reviewsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
