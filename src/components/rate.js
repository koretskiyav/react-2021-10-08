import styles from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as StarBorder } from '../icons/star_border.svg';

function Rate({ value }) {
  let rates = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rate}>
      {rates.map((item, index) => (
        <span key={index}>
          {item <= value ? (
            <Star className={styles.icon} />
          ) : (
            <StarBorder className={styles.icon} />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rate;
