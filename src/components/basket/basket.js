import React, { useMemo } from "react";
import { useSelector } from "react-redux"
import { restaurants } from "../../fixtures";
import Product from "../product";
import styles from '../product/product.module.css';

function Basket(props) {
  const allProducts = useMemo(() => restaurants.reduce((result, restaurant) => {
    return [...result, ...restaurant.menu]
  }, []), [restaurants]);
  const ordersState = useSelector(state => state.order);
  let totalPrice = 0;

  return (
    <div className={styles.product}>
      <h2 className={styles.title}>Cart</h2>

      {allProducts.map(product => {
        const amountOfProduct = ordersState[product.id];
        if (amountOfProduct > 0) {
          totalPrice += product.price * amountOfProduct;
          return (<Product key={product.id} product={product} isInBasket />)
        }
      })}

      <span className={styles.price}>Total: {totalPrice} $</span>
    </div>
  )
}

export default Basket;