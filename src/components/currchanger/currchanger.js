import { currencyContext } from '../../contexts/currency-context';
import styles from './currchanger.module.css';
import { useContext } from 'react';

export default function CurrChanger() {
  const { currency, setCurrency } = useContext(currencyContext);

  return (
    <div className={styles.divbutton} v>
      <button className={styles.but} onClick={() => setCurrency('USD')}>
        USD
      </button>
      <button className={styles.but} onClick={() => setCurrency('EUR')}>
        EUR
      </button>
      <button className={styles.but} onClick={() => setCurrency('RUB')}>
        RUB
      </button>
    </div>
  );
}
