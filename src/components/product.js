import counter from '../hocs/counter';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';
import styles from './product.module.css'

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{product.name}</p>
      <p>{product.price} $</p>
      <div className={styles.amount}>
        <button onClick={decrement}>
          <Minus className={styles.icon} />
        </button>
        {amount}
        <button onClick={increment}>
          <Plus className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
