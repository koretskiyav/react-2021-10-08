import styles from './rate.module.css';

import { ReactComponent as Plus } from '../icons/plus.svg';

function Rate({ value }) {
  const emptyRate = 5 - value;
  let str = [];
  for (let i = 0; i < value; i++) {
    str.push(`<span>
        <Plus className={styles.icon} />
      </span>`);
  }
  console.log(str);
  return <div className={styles.rate}>{str.map((element) => str.values)}</div>;
}

export default Rate;
