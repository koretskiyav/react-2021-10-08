import styles from './rate.module.scss';
import { ReactComponent as Star } from '../../icons/star.svg';
import { label } from '../../hocs/label';

interface IProps {
  rate: number;
}

const RATE_NUM_MAX = 5;

export const Rate = ({ rate }: IProps) => {
  let stars: JSX.Element[] = [];

  for (let i = 0; i < RATE_NUM_MAX; i++) {
    stars.push(
      // dummy index key cause it's not important here
      <Star key={i} className={i < rate ? '' : styles['-inactive']} />
    );
  }

  return (
    <div className={styles.rate}>
      {stars}
    </div>
  );
};

export const RateWithLabel = label(Rate);
