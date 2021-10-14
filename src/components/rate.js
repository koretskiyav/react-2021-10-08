import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

export default function Rate({ rating, maxRating }) {
  const elements = [];
  for (let i = 0; i < rating; i++) {
    elements.push(1);
  }
  for (let i = 0; i < maxRating - rating; i++) {
    elements.push(0);
  }
  return (
    <div className={styles.icons}>
      {elements.map((element, index) => (
        <div key={index} className={styles.icon}>
          {element === 1 ? (
            <Star className={styles.filled} />
          ) : (
            <Star className={styles.stroked} />
          )}
        </div>
      ))}
    </div>
  );
}
