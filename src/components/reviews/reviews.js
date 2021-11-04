import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import Loader from '../loader';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import reviewStyles from './review/review.module.css';

import { loadReviews, loadUsers } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  loadUsers,
  usersLoaded,
  reviewsLoaded,
}) => {
  useEffect(() => {
    loadUsers();
    loadReviews(restId);
  }, [restId, loadReviews, loadUsers]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  console.log('ff: ', reviewStyles);

  return (
    <div className={styles.reviews}>
      <TransitionGroup>
        {reviews.map((id) => (
          <CSSTransition
            key={id}
            timeout={500}
            classNames={{
              enter: reviewStyles['review-item-enter'],
              enterActive: reviewStyles['review-item-enter-active'],
              exit: reviewStyles['review-item-exit'],
              exitActive: reviewStyles['review-item-exit-active'],
            }}
          >
            <Review id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
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
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
