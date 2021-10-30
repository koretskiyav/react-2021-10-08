import { connect } from 'react-redux';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import { NavLink } from 'react-router-dom';
import { allRestaurantsSelector } from '../../../redux/selectors';

function BasketItem({
  rests,
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) {
  function getRestId() {
    const rId = Object.values(rests);
    for (const rest of rId) {
      for (const prod of rest.menu) {
        if (product.id === prod) return rest.id;
      }
    }
  }

  const curRestId = getRestId();

  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <NavLink to={`/restaurants/${curRestId}/menu`}>{product.name}</NavLink>
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

const mapStateToProps = (state, props) => ({
  rests: allRestaurantsSelector(state, props),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
