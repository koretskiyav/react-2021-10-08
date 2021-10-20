import React from 'react';
import { connect } from 'react-redux';
import Button from '../button';
import styles from './basket.module.css';
import { decrement, increment } from '../../redux/actions';

function Basket({ order }) {
  const orders = Object.values(order);

  console.log(orders);
  return (
    <div className={styles.basket}>
      <h3>Basket</h3>
      <div className={styles.count} data-id="product-amount">
        0
      </div>
      <div className={styles.product}>
        <div className={styles.counter}>
          {orders.map((item) => {
            return (
              <>
                <h4 className={styles.title}>product</h4>
                <div>{item}</div>
                <div className={styles.buttons}>
                  <Button
                    // onClick={decrement}
                    icon="minus"
                    data-id="product-decrement"
                  />
                  <Button
                    // onClick={increment}
                    icon="plus"
                    data-id="product-increment"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

function is_object(mixed_var) {
  if (mixed_var instanceof Array) {
    return false;
  } else {
    return mixed_var !== null && typeof mixed_var == 'object';
  }
}

function objectToArray(obj) {
  var array = [],
    tempObject;
  for (var key in obj) {
    tempObject = obj[key];

    if (is_object(obj[key])) {
      tempObject = objectToArray(obj[key]);
    }
    array[key] = tempObject;
  }
  return array;
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
