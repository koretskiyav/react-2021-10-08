import { useMemo } from 'react';
import { ReactComponent as Star } from '../icons/rating.svg';
import styles from './restaurant.module.css';

const Rate = ({ value, className }) => {
  const rating = useMemo(() => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const selected = i < value ? styles.selected : '';

      stars.push(<Star key={i} className={`${styles.icon} ${selected}`} />);
    }

    return stars;
  }, [value]);

  return <div className={className}>{rating}</div>;
};

export default Rate;
