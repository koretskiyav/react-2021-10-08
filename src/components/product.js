import counter from '../hocs/counter';
import styles from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.price} $</p>
      <div className={styles.b_numbers}>
        <button className={styles.b_numbers__btn} onClick={decrement}>
          <Minus className={styles.icon} />
        </button>
        <span className={styles.b_numbers__count}>{amount}</span>
        <button className={styles.b_numbers__btn} onClick={increment}>
          <Plus className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
