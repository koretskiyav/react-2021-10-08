import { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from './review';
import Loader from '../loader';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  restaurantSelector,
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

const Reviews = ({
  restaurant,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
  match,
}) => {
  const { reviews } = restaurant;
  const restId = match.params.restId;

  useEffect(() => {
    loadUsers();
    loadReviews(restId);
  }, [restId, loadReviews, loadUsers]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  reviewsLoaded: reviewsLoadedSelector(state, props.match.params),
  usersLoaded: usersLoadedSelector(state, props),
  restaurant: restaurantSelector(state, { id: props.match.params.restId }),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
