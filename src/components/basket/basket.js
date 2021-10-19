import React from 'react';
import Button from '../button';
import styles from './basket.module.css';
import { connect } from 'react-redux';
import { decrement, increment } from '../../redux/actions';

function Basket({ props }) {
  return (
    <div className={styles.basket}>
      <h3>Basket</h3>
      <div className={styles.product}>
        <h4 className={styles.title}>product</h4>
        <div className={styles.counter}>
          <div className={styles.count} data-id="product-amount">
            {amount}
          </div>
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

export default Basket;
