import { ReactComponent as Star } from '../icons/star-black.svg';
import { ReactComponent as StarBorder } from '../icons/star-border-black.svg';
import styles from './rate.module.css';

export default function Rate({ rating }) {
  const maxStars = 5;
  return (
    <p className={styles.stars}>
      {[...Array(maxStars)].map((item, index) =>
        (index < rating) ? (<Star className={styles.svg} />) : (<StarBorder className={styles.svg} />)
      )}
    </p>
  );
}

