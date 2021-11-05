import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { placeOrder } from '../../redux/actions';
import Currency from '../currency/currency';

function Basket({ title = 'Basket', total, orderProducts, placeOrder }) {
  // const { name } = useContext(userContext);

  // function placeOrder() {
  //   console.log(orderProducts)
  // }

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>{title}</h4>
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
          <Currency cost={total} />

        </div>
      </div>
      <Switch>
        <Route path="/checkout">
          <Button primary block onClick={placeOrder}>
            place an order
          </Button>
        </Route>
        <Route>
          <Link to="/checkout">
            <Button primary block>
              go to cart
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
  };
};

const mapDispatchToProps = { placeOrder }

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
