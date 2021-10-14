import counter from '../hocs/counter';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className="product__card">
      <p className="product__title">{product.name}</p>
      <p>{product.price} $</p>
      <div className="product__amount">
        <button onClick={decrement}>
          <Minus className="product__icon" />
        </button>
        {amount}
        <button onClick={increment}>
          <Plus className="product__icon" />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
