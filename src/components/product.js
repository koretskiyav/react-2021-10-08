import counter from '../hocs/counter';
import styles from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card}>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <button onClick={decrement}>
        <Minus className={styles.icon} />
      </button>
      {amount}
      <button onClick={increment}>
        <Plus className={styles.icon} />
      </button>
    </div>
  );
}

export default counter(Product);
