import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../button';
import { decrement, increment, remove } from '../../../redux/actions';

const propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number,
  name: PropTypes.string,
  total: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

const defaultProps = {
  amount: 0,
  product: {
    name: 'Unknown Product',
    price: 0,
  },
};

function LineItem({ amount, name, total, increment, decrement, remove }) {
  return (
    <div>
      <span>{name}: </span>
      <span>{amount}</span>
      <div>total: {total}</div>

      <div>
        <Button onClick={decrement} icon="minus" data-id="product-decrement" />
        <Button onClick={increment} icon="plus" data-id="product-increment" />
        <Button onClick={remove} icon="remove" data-id="product-remove" />
      </div>
    </div>
  );
}

LineItem.propTypes = propTypes;
LineItem.defaultProps = defaultProps;

const mapStateToProps = (state, props) => ({
  name: state.productList[props.id].name,
  total: state.basket.itemsTotal[props.id],
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
  remove: () => dispatch(remove(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineItem);
