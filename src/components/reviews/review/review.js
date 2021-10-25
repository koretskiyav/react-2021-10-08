import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';

function Review({reviewId, review, users}) {
  const user = users[review?.userId] ? users[review?.userId] : null;
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            { user.name ? user.name : "Anonymous"}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {review && (review.text)}
          </p>
        </div>
        <div className={styles.rate}>
          {review && review.rating && (<Rate value={review.rating}/>)}
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = (state, props) => {
  return {
    review: state.reviews[props.reviewId],
    users: state.users
  }
};

export default connect(mapStateToProps)(Review);
