import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cn from 'classnames';
import styles from './basket.module.css';
import './basket.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import Money from '../money';
import {
  orderProductsSelector,
  totalSelector,
  chechoutSendingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { checkoutOrder } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  checkoutOrder,
  sending,
}) {
  // const { name } = useContext(userContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={cn(styles.basket, { [styles.disable]: sending })}>
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
            <Money value={total} />
          </p>
        </div>
      </div>
      <Button primary block onClick={checkoutOrder}>
        {sending ? <Loader /> : 'checkout'}
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    sending: chechoutSendingSelector(state),
  };
};

const mapDispatchToProps = {
  checkoutOrder,
};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
