import Menu from './menu';
import styles from './restaurant.module.css';
import Reviews from './reviews';

export const Restaurant = ({ restorant }) => {
  let ratings = [];

  restorant.reviews.forEach((element) => {
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
        Restaurant <span className={styles.title}>{restorant.name}</span>
      </h2>
      <div className={styles.content}>
        <Menu menu={restorant.menu} />
        <Reviews reviews={restorant.reviews} srRate={srRate} />
      </div>
    </div>
  );
};
