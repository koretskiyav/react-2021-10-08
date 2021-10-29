import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewLoadedSelector,
  reviewLoadedUsers,
  reviewLoadingSelector,
  reviewLoadingUsers,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  loaded,
  loading,
  loadedUsers,
  loadingUsers,
  loadUsers,
}) => {
  useEffect(() => {
    if (!loadedUsers && !loadingUsers) loadUsers();
    if (!loaded && !loading) loadReviews(restId);
  }, [
    restId,
    loadReviews,
    loadUsers,
    loaded,
    loadedUsers,
    loading,
    loadingUsers,
  ]);

  if (loading || loadingUsers) return <Loader />;
  if (!loaded && !loadedUsers) return 'No data :(';

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} restId={restId} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    restId: props.restId,
    loadedUsers: reviewLoadedUsers(state),
    loadingUsers: reviewLoadingUsers(state),
    loaded: reviewLoadedSelector(state, props),
    loading: reviewLoadingSelector(state, props),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  loadReviews: () => dispatch(loadReviews(props.restId)),
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
