import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ rw, user }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {rw.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rw.rating} />
      </div>
    </div>
  </div>
);
Review.propTypes = {
  user: PropTypes.object,
  text: PropTypes.string,
};

Review.defaultProps = {
  user: 'Anonymous',
};

const mapStateToProps = (state, props) => ({
  user: state.users[props.rw.userId],
});

export default connect(mapStateToProps)(Review);
