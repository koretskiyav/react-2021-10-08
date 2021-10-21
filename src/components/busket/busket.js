import { connect } from 'react-redux';
import Button from '../button';
import styles from './busket.module.css';
import productHashCreator from '../../hooks/productHashCreator';
import { decrement, remove, increment } from '../../redux/actions';
import PropTypes from 'prop-types';

function Busket({ increment, decrement, remove, products, totalPrice }) {
  console.log(products);
  return (
    <div className={styles.busket}>
      <h2>BUSKET</h2>
      {products.map((product) => (
        <div key={product.id} className={styles.busket}>
          <h3>{product.name}</h3>
          <span>
            <b>Price: {product.price}$</b>
          </span>
          <br />
          <span>
            <b>Amount: {product.amount}</b>
          </span>
          <br />
          <span>
            <b>SubTotal: {product.price * product.amount}</b>
          </span>
          <div>
            <div className={styles.buttons}>
              <Button
                onClick={() => decrement(product.id)}
                icon="minus"
                data-id="product-decrement"
              />
              <Button
                onClick={() => increment(product.id)}
                icon="plus"
                data-id="product-increment"
              />
              <Button
                onClick={() => remove(product.id)}
                icon="remove"
                data-id="product-removement"
              />
            </div>
          </div>
        </div>
      ))}
      <h3>Total price: {totalPrice}</h3>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const productHash = productHashCreator(props.restaurants);
  const keys = Object.keys(state.order);
  const products = keys.map((k) => ({
    ...productHash[k],
    amount: state.order[k],
  }));
  const totalPrice = products.reduce(
    (prev, current) => prev + current.price * current.amount,
    0
  );
  return {
    products,
    totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(increment(id)),
  decrement: (id) => dispatch(decrement(id)),
  remove: (id) => dispatch(remove(id)),
});

Busket.propTypes = {
  products: PropTypes.arrayOf({
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  totalPrice: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Busket);
