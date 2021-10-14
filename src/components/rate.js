import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

export default function Rate({ value }) {
  const starComponent = (ind) => (
    <Star key={String('star' + ind)} className={styles.icon} />
  );
  return (
    <div className={styles.container}>
      {new Array(value).fill().map((el, ind) => starComponent(ind))}
    </div>
  );
}
