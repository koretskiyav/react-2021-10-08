import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reviewSelector } from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ user, text, rating }) => (<div className={styles.review} data-id="review">
  <div className={styles.content}>
    <div>
      <h4 className={styles.name} data-id="review-user">
        {user || 'Anonymous'}
      </h4>
      <p className={styles.comment} data-id="review-text">
        {text}
      </p>
    </div>
    <div className={styles.rate}>
      <Rate value={rating} />
    </div>
  </div>
</div>);

Review.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default connect((state, props) => reviewSelector(state, props.id))(Review);
