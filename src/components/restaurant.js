import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';
import styles from './restaurant.module.css';

function getRate(restaurant) {
  const reviews = restaurant.reviews;
  const sum = reviews.reduce((acc, val) => acc + val.rating, 0);
  return Math.floor(sum / reviews.length);
}

export default function Restaurant({ restaurant }) {
  return (
    <>
      <header className={styles.header}>
        <h1>{restaurant.name}</h1>
        <Rate value={getRate(restaurant)} />
      </header>

      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
