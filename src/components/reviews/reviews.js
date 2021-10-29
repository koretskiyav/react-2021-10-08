import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import Loader from '../loader/loader';
import {
  reviewsListSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import styles from './reviews.module.css';

import { loadUsers } from '../../redux/actions';

const Reviews = ({ reviews, restId, loadUsers, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) loadUsers();
  }, [loading, loaded, loadUsers]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map(({ id }) => (
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

const mapStateToProps = (state) => ({
  reviews: reviewsListSelector(state),
  loading: usersLoadingSelector(state),
  loaded: usersLoadedSelector(state),
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
