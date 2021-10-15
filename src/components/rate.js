import { ReactComponent as Star } from '../icons/star.svg'
import styles from './rate.module.css';

export default function Rate ({ rating }) {
  return (
    [...Array(rating)].map((_, ind) => <Star className={styles.icon} key={ind} />)
  );
};