import { decrement, increment, remove } from '../../../redux/actions';
import { connect } from 'react-redux';
import Button from '../../button';
import styles from './basket-item.module.css';
import PropTypes from 'prop-types';

function BasketItem({ orderId, amount, menu, decrement, increment, remove }) {
  return (
    <div className={styles.basketItem}>
      <div>
        {menu[orderId].name} &times; {amount} = {menu[orderId].price * amount} $
      </div>
      <div className={styles.controls}>
        <Button onClick={decrement} icon="minus" />
        <Button onClick={increment} icon="plus" />
        <Button onClick={remove} icon="cross" />
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.orderId] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.orderId)),
  decrement: () => dispatch(decrement(props.orderId)),
  remove: () => dispatch(remove(props.orderId)),
});

BasketItem.propTypes = {
  orderId: PropTypes.string.isRequired,
  menu: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }),
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
