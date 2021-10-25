import { connect } from 'react-redux';
import { createreview } from '../../../redux/actions';
import useForm from '../../../hooks/use-form';
import Rate from '../../rate';
import Button from '../../button';

import styles from './review-form.module.css';

const INITIAL_VALUES = { name: '', text: '', rating: 3 };

const ReviewForm = ({ onSubmit, restid }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);
  values.restid = { restid };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rating} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(createreview(values)),
});
export default connect(null, mapDispatchToProps)(ReviewForm);
