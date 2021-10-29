import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
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
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

// const mapStateToProps = (state, props) => ({
//   ...reviewWitUserSelector(state, props),
//   loading: reviewLoadingSelector(state, props),
//   loaded: reviewLoadedSelector(state, props),
//   restId: props.restId,
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   loadReviews: () => dispatch(loadReviews(props.restId)),
// });

const mapStateToProps = reviewWitUserSelector;

export default connect(mapStateToProps)(Review);
