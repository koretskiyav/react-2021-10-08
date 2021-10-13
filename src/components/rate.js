import styles from './rate.module.css';

import { ReactComponent as Plus } from '../icons/plus.svg';

function Rate({ value }) {
  let rates = [1, 2, 3, 4, 5];

  return (
    <div className={styles.rate}>
      {rates.map((element) => (
        <span>
          <Plus className={styles.icon} />
        </span>
      ))}
    </div>
  );
}

export default Rate;
