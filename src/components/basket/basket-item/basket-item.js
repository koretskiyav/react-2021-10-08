import { connect } from 'react-redux';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import Button from '../../button';
import styles from './basket-item.module.css';
import { restaurantsListSelector } from '../../../redux/selectors';

function BasketItem({
  restId,
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restId}`}>{product.name}</Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" secondary small />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" secondary small />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button onClick={remove} icon="delete" secondary small />
      </div>
    </div>
  );
}

const matchStateToProps = (state, props) => ({
  restId: restaurantsListSelector(state, props).find(({ menu }) =>
    menu.includes(props.product.id)
  ).id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(matchStateToProps, mapDispatchToProps)(BasketItem);
