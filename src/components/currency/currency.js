import { useContext } from 'react';
import { currencyContext } from '../../contexts/currency-context';
import cn from 'classnames';
import styles from '../basket/basket-item/basket-item.module.css';


export default function Currency({ cost }) {
  const { currency } = useContext(currencyContext);

  const getConvertedCost = (value) => {
    if (currency === '₽') {
      return value * 71
    } else if (currency === '₴') {
      return value * 26
    } else return cost
  }

  return (
    <p className={cn(styles.count, styles.price)}>{getConvertedCost(cost)} {currency}</p>
  )
}