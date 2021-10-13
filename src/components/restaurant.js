import styles from "./product.module.css";
import Menu from "./menu";
import Reviews from "./reviews/reviews";
import Rate from "./rate/rate";

function Restaurant(props) {
  const {restaurant} = props;
  // Get rating array for all reviews.
  const rating = restaurant.reviews.map(review => review.rating);
  // Get average rating value.
  const averageRating = rating.reduce((a, b) => a + b) / rating.length;

  return (
    <div>
      <div className={styles.card}>
        <strong>Average rating: </strong>
        <Rate rating={averageRating}/>
      </div>
      <div className={styles.card}>
        {restaurant.menu && (<Menu menu={restaurant.menu} />)}
      </div>
      <div className={styles.card}>
        {restaurant.reviews && (<Reviews reviews={restaurant.reviews} />)}
      </div>
    </div>
  );
}

export default Restaurant;
