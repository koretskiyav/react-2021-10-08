import Menu from './menu';
import styles from './restaurant.module.css';
import Reviews from './reviews';

export const Restaurant = ({ restourant }) => {
  let ratings = [];

  restourant.reviews.forEach((element) => {
    ratings.push(element.rating);
  });

  function averageСost(arr) {
    return Math.round(
      arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length
    );
  }

  const srRate = averageСost(ratings);

  return (
    <div className={styles.wrapper}>
      <h2>
        Restaurant <span className={styles.title}>{restourant.name}</span>
      </h2>
      <div className={styles.content}>
        <Menu menu={restourant.menu} />
        <Reviews reviews={restourant.reviews} srRate={srRate} />
      </div>
    </div>
  );
};
