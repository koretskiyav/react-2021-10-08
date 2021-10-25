import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, reviews, users }) => {
  const { userId, text, rating } = reviews[id];
  return <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {users[userId].name || 'Anonymous'}
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
};

Review.propTypes = {
  id: PropTypes.string,
};

const mapStateToProps = ({ reviews, users }) => ({ reviews, users });

export default connect(mapStateToProps)(Review);
