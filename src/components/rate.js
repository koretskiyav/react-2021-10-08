import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

function star(key) {
  return (
    <span key={key} className={styles.item}>
      <Star />
    </span>
  );
}

export default function Rate({ value }) {
  const result = Array(Math.min(Math.max(value, 1), 5))
    .fill(0)
    .map((val, ind) => star(ind));

  return <div>{result}</div>;
}
