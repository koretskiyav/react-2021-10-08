import { useMemo } from 'react';
import { ReactComponent as Star } from '../icons/rating.svg';
import { MAX_POSSIBLE_RATING } from '../constants';
import styles from './restaurant.module.css';

const Rate = ({ value, className }) => {
  const rating = useMemo(
    () =>
      Array.from({ length: MAX_POSSIBLE_RATING }, (_, i) => {
        const selected = i < value ? styles.selected : '';

        return <Star key={i} className={`${styles.icon} ${selected}`} />;
      }),
    [value]
  );

  return <div className={className}>{rating}</div>;
};

export default Rate;
