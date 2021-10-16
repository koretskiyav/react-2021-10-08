import { ReactComponent as Star } from '../icons/star.svg';
import styles from './reviews.module.css';

export default function Rate({ value }) {
  const star = 5;

  return (
    <div className={styles.stars}>
      {[...Array(star)].map((elem, i) => {
        return (
          <Star
            key={`rating_${value}_${i / 3}`}
            style={i < value ? { fill: '#fce405' } : { fill: '#acabab' }}
          />
        );
      })}
    </div>
  );
}
