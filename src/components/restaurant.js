
import styles from "./product.module.css";
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

export default function  Restaurant({restaurant}) {

  function getAVGRating(reviews){
    const rating = reviews.map(review => review.rating);
    const ratingAmount = rating.length;
    return rating.reduce((accumulator, currentValue) => accumulator + currentValue) / ratingAmount;
  }


  return (
    <div >
      <div className={styles.card}>
        <strong>Средний рейтиг ресторана: </strong>
        <Rate rating={getAVGRating(restaurant.reviews)} />
      </div>
      <div className={styles.card}>
        {restaurant.menu && (<Menu menu={restaurant.menu} />)}
      </div>
      <div>
        {restaurant.reviews && (<Reviews reviews={restaurant.reviews} />)}
      </div>
    </div>
  );
}
