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
  const result = Array(value)
    .fill(0)
    .map((val, ind) => star(ind));

  return <div>{result}</div>;
}
