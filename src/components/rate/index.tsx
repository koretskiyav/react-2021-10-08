import styles from './rate.module.scss';
import { ReactComponent as Star } from '../../icons/star.svg';
import { label } from '../../hocs/label';

interface IProps {
  rate: number;
}

const RATE_NUM_MAX = 5;
const rateArray = [...Array(RATE_NUM_MAX).keys()];

export const Rate = ({ rate }: IProps) => {
  // dummy index key cause it's not important here
  const stars = rateArray.map(i => <Star key={i} className={i < rate ? '' : styles['-inactive']} />);

  return (
    <div className={styles.rate}>
      {stars}
    </div>
  );
};

export const RateWithLabel = label(Rate);
