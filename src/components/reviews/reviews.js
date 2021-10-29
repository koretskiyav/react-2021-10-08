import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from '../loader';
import {
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import { loadUsers } from '../../redux/actions';

const Reviews = ({ reviews, restId, loadUsers, usersLoading, usersLoaded }) => {
  useEffect(() => {
    if (!usersLoading && !usersLoaded) loadUsers();
  }, [loadUsers, usersLoading, usersLoaded]);

  if (usersLoading) return <Loader />;
  if (!usersLoaded) return 'No data :(';

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
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
});

const mapDispatchToProps = {
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
