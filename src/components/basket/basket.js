import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../button';
import BasketItem from './basketItem/basketItem';

import styles from './basket.module.css';

const Basket = ({ basketAmount, basketContent, basketTotal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivateBasket = () => {
    setIsActive(isActive ? false : true);
  };

  return (
    <div
      className={cn(styles.basket, {
        [styles.active]: isActive,
        [styles.full]: !!basketAmount,
      })}
    >
      <div className={styles['button']}>
        <Button icon="cart" onClick={handleActivateBasket} />
        <span className={styles['amount']}>{basketAmount}</span>
      </div>
      <div className={styles['content']}>
        {basketContent}
        {!!basketTotal && <p>Total: {basketTotal} $</p>}
      </div>
    </div>
  );
};

Basket.propTypes = {
  basketAmount: PropTypes.number,
  basketContent: PropTypes.node,
  basketTotal: PropTypes.number,
};

const mapStateToProps = (state) => ({
  basketAmount: Object.values(state.order).reduce(
    (acc, { amount }) => acc + amount,
    0
  ),
  basketContent: Object.entries(state.order).length ? (
    Object.entries(state.order).map(([id, product]) => (
      <BasketItem key={id} product={product} />
    ))
  ) : (
    <p>Your basket is empty. Please add the product</p>
  ),
  basketTotal: Object.values(state.order).reduce(
    (acc, { amount, price }) => acc + amount * price,
    0
  ),
});

export default connect(mapStateToProps)(Basket);
