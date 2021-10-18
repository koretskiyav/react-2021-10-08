import cn from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './rate.module.css';

const Rate = ({ value }) => (
  <div data-id="rating">
    {[...Array(5)].map((_, i) => {
      const isRatingGrater = value - 1 >= i;
      const checked = isRatingGrater ? 'checked' : '';

      return (
        <Star
          key={i}
          className={cn(styles.star, { [styles.checked]: isRatingGrater })}
          data-id={checked}
        />
      );
    })}
  </div>
);

Rate.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rate;
