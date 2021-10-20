import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import Button from '../button';
import { decrement, increment, clear } from '../../redux/actions';

function Product({ product, amount, decrement, increment, clear, fetchData, isInBasket }) {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{isInBasket ? product.price * amount : product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button
                onClick={decrement}
                icon="minus"
                data-id="product-decrement"
                disabled={amount < 1}
              />
              <Button
                onClick={increment}
                icon="plus"
                data-id="product-increment"
              />
              {isInBasket &&
                (<Button
                  onClick={clear}
                  icon="trash"
                  data-id="product-clear"
                />
                )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  fetchData: PropTypes.func,
  isInBasket: PropTypes.bool,
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  return ({
    amount: state.order[props.product.id] || 0,
  })
};

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
