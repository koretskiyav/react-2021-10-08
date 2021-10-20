import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Button from '../button';
import styles from './basket.module.css';
import { decrement, increment, remove } from '../../redux/actions';

function Basket({ order, amount }) {
  //console.log(order[product.id]);
  return (
    <div className={styles.basket}>
      <h3>Basket</h3>
      <div className={styles.product}>
        <h4 className={styles.title}>product</h4>
        <div className={styles.counter}>
          <div className={styles.count} data-id="product-amount">
            {amount}
          </div>
          {/* {order.map((item) => {
            const { id, count } = item;
            return <div key={id}>{count}</div>;
          })} */}
          <div className={styles.buttons}>
            <Button
              onClick={decrement}
              icon="minus"
              data-id="product-decrement"
            />
            <Button
              onClick={increment}
              icon="plus"
              data-id="product-increment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
