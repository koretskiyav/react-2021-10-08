import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { createOrder } from '../../redux/actions';

import { UserConsumer } from '../../contexts/user-context';
import { useConvert } from '../../hooks/use-convert';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  createOrder,
  loading,
}) {
  const convert = useConvert();
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      {loading && (
        <div className={styles.loading}>
          <Loader />
        </div>
      )}
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
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
          <p>{convert(total)}</p>
        </div>
      </div>
      <Switch>
        <Route path="/checkout">
          <Button primary block onClick={createOrder}>
            send order
          </Button>
        </Route>
        <Route>
          <Link to="/checkout">
            <Button primary block>
              go to checkout
            </Button>
          </Link>
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    loading: orderLoadingSelector(state),
  };
};

const mapDispatchToProps = { createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
