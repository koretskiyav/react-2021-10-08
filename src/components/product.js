import counter from '../hocs/counter';
import styles from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card}>
      <h4>
        Product: <span className={styles.title}>{product.name}</span>
      </h4>
      <p className={styles.price}>Price: {product.price} $</p>
      <div className={styles.amount__wrapper}>
        Reservation:
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
