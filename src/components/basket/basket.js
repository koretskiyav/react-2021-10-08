import { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../button';
import BasketItem from './basketItem/basketItem';

import styles from './basket.module.css';

const Basket = ({ order }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActivateBasket = () => {
    setIsActive(isActive ? false : true);
  };

  const basketAmount = useMemo(
    () => Object.values(order).reduce((acc, { amount }) => acc + amount, 0),
    [order]
  );

  const basketContent = useMemo(() => {
    return Object.entries(order).length ? (
      Object.entries(order).map(([id, product]) => (
        <BasketItem key={id} product={product} />
      ))
    ) : (
      <p>Your basket is empty. Please add the product</p>
    );
  }, [order]);

  const basketTotal = useMemo(() => {
    return Object.values(order).reduce(
      (acc, { amount, price }) => acc + amount * price,
      0
    );
  }, [order]);

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
  order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
