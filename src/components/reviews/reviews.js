import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import Loader from '../loader';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';

const Reviews = ({
  reviews,
  id,
  reviewsLoading,
  reviewsLoaded,
  loadReviews,
  usersLoading,
  usersLoaded,
  loadUsers,
}) => {
  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded) loadReviews(id);
    if (!usersLoading && !usersLoaded) loadUsers();
  }, [
    id,
    reviewsLoading,
    reviewsLoaded,
    loadReviews,
    usersLoading,
    usersLoaded,
    loadUsers,
  ]);

  if (reviewsLoading !== false || usersLoading !== false) return <Loader />;
  if (!reviewsLoaded && !usersLoaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={id} />
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  usersLoading: usersLoadingSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
  reviewsLoading: reviewsLoadingSelector(state, props),
  reviewsLoaded: reviewsLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
