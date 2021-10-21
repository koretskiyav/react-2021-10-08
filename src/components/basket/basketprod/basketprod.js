import { decrement, increment, dropfrombasket } from '../../../redux/actions';
import Button from '../../button';
import { connect } from 'react-redux';
import styles from './basketprod.module.css';

function Basketprod({ product, order, decrement, increment, dropfrombasket }) {
  return (
    <div className={styles.main}>
      <div className={styles.container} key={product.id}>
        <div className={styles.name}>{product.name}</div> {product.price}$
        Сount:{order}
        <div className={styles.buttons}>
          <Button onClick={decrement} icon="minus" />
          <Button onClick={increment} icon="plus" />
          <Button onClick={dropfrombasket} icon="drop" />
        </div>
        Subtotal:{product.price * order}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  dropfrombasket: () => dispatch(dropfrombasket(props.product.id)),
});
export default connect(null, mapDispatchToProps)(Basketprod);
