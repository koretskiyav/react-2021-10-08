
import React, { useMemo } from "react";
import Rate from "./Rate";
import Menu from "./Menu";
import Reviews from './Reviews';
import styles from './restaurant.module.css';

function Restaurant({ restaurant }) {

  const rating = useMemo(() => {
    if (restaurant.reviews) {
      return restaurant.reviews.reduce((sum, item) => sum + item.rating, 0) / restaurant.reviews.length;
    } else {
      return 0;
    }
  }, [restaurant.reviews])

  return (
    <section className={styles.restaurant}>
      <h2>{restaurant.name}</h2>
      <Rate value={rating} />
      <div className={styles.info}>
        <Menu menu={restaurant.menu} />
        {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
      </div>
    </section>
  )
}

export default Restaurant;