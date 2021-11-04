import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderLoadingSelector,
  orderProductsSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import Price from '../price';
import { makeOrder } from '../../redux/actions';
import Loader from '../loader';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  orderLoading,
  makeOrder,
}) {
  // const { name } = useContext(userContext);

  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  const handleSubmit = (e) => {
    e.preventDefault();
    makeOrder();
  };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      {/* <h4 className={styles.title}>{`${name}'s ${title}`}</h4> */}
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restId={restId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>
            <Price value={total} />
          </p>
        </div>
      </div>
      {isCheckout ? (
        <form onSubmit={handleSubmit}>
          <Button primary block disabled={orderLoading}>
            checkout
          </Button>
        </form>
      ) : (
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      )}
      {orderLoading ? <Loader /> : undefined}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    orderLoading: orderLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  makeOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
