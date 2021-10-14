import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';
import styles from './product.module.css';

export default function Restaraunt({ restaraunt }) {
  const averageRate =
    restaraunt.reviews.length === 0
      ? 0
      : restaraunt.reviews.reduce(
          (prevValue, currentElem) => prevValue + currentElem.rating,
          0
        ) / restaraunt.reviews.length;

  return (
    <div>
      <Menu menu={restaraunt.menu} />
      <Reviews reviews={restaraunt.reviews} />
      <div className={styles.card}>
        <p>Average rate of {restaraunt.name}:</p>
        <Rate rate={averageRate} />
      </div>
    </div>
  );
}
