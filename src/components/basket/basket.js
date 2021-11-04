import { useMemo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader/loader';
import {
  orderProductsSelector,
  totalSelector,
  orderCheckoutLoadingSelector,
  orderCheckoutLoadedSelector,
  currentLocationSelector,
} from '../../redux/selectors';
import { submitOrder } from '../../redux/actions';
import { UserConsumer } from '../../contexts/user-context';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  loading,
  loaded,
  submitOrder,
  currentPathName,
}) {
  console.log('render Basket');
  const onClick = useMemo(
    () => (currentPathName === '/checkout' ? { onClick: submitOrder } : {}),
    [currentPathName, submitOrder]
  );

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
          <p>{`${total} $`}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button primary block {...onClick}>
          checkout
        </Button>
      </Link>
      {loading && !loaded && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPathName: currentLocationSelector(state),
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    loading: orderCheckoutLoadingSelector(state),
    loaded: orderCheckoutLoadedSelector(state),
  };
};

const mapDispatchToProps = { submitOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
