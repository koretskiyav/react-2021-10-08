import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import { CurrencyConsumer } from '../../contexts/currency-context';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  orderFetchSelector,
  fetchLoadingSelector,
  fetchValue,
  ordersSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { fetchOrder } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  location = 'not yet',
  order,
  fetchLoading,
  fetchOrder,
  fetchValue,
  ordersSelector,
}) {
  const Empty = () => {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  };

  // const { name } = useContext(userContext);
  if (fetchLoading === true) {
    return <Loader />;
  }
  if (fetchValue === 'ok') {
    ordersSelector = {};
  }

  if (!total) {
    return <Empty />;
  }

  const loc = location.pathname;
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
            <CurrencyConsumer>
              {({ rate }) => `${total * rate}`}
            </CurrencyConsumer>
            <CurrencyConsumer>{({ symbol }) => `${symbol}`}</CurrencyConsumer>
          </p>
        </div>
      </div>
      <Link to="/checkout">
        <Button
          primary
          block
          onClick={() => {
            if (loc === '/checkout') {
              fetchOrder(order);
            }
          }}
        >
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    fetchValue: fetchValue(state),
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    order: orderFetchSelector(state),
    fetchLoading: fetchLoadingSelector(state, props),
    orderList: ordersSelector(state, props),
  };
};

const mapDispatchToProps = {
  fetchOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
