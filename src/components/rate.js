import { ReactComponent as Star } from '../icons/star.svg';
import styles from './reviews.module.css';

export default function Rate({ value }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    let starFilled = i < value ? { fill: '#fce405' } : { fill: '#acabab' };

    stars.push(<Star key={`${i}_rating_${value}`} style={starFilled} />);
  }

  return <div className={styles.stars}>{stars}</div>;
}
