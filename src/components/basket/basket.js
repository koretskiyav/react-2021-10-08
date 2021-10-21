import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { restaurants } from '../../fixtures';
import Product from '../product';
import styles from './basket.module.css';

function Basket({ props }) {
  const allProducts = useMemo(
    () =>
      restaurants.reduce((result, restaurant) => {
        return [...result, ...restaurant.menu];
      }, []),
    []
  );
  const ordersState = useSelector((state) => state.order);
  let totalPrice = 0;

  return (
    <div className={styles.basket}>
      <div className={styles.basket__top}>
        <h3>Basket</h3>
      </div>
      {allProducts.map((product) => {
        const amountOfProduct = ordersState[product.id];
        if (amountOfProduct > 0) {
          totalPrice += product.price * amountOfProduct;
          return <Product key={product.id} product={product} isInBasket />;
        }
      })}
      <div className={styles.basket__bottom}>
        <span className={styles.price}>Total: {totalPrice} $</span>
      </div>
    </div>
  );
}

export default Basket;
