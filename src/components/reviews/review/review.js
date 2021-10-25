import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

import styles from './review.module.css';

const Review = ({ review, user }) => {
  const { text, rating } = review;
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.name}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  review: PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => {
  const review = reviewsSelector(state)[props.id];

  return {
    review,
    user: usersSelector(state)[review.userId],
  };
})(Review);
