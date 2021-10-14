
import React, { useEffect, useState } from "react";
import Rate from "./Rate";
import Menu from "./Menu";
import Reviews from './Reviews'

function Restaurant({ restaurant }) {

  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (restaurant.reviews) {
      const averageRating = restaurant.reviews.reduce((sum, item) => {
        return sum + item.rating;
      }, 0) / restaurant.reviews.length;
      setRating(averageRating)
    }
  }, [restaurant.reviews])

  return (
    <section className="restaurant">
      <h2 className="restaurant__title">{restaurant.name}</h2>
      <Rate value={rating} />
      <div className="restaurant__info">
        <Menu menu={restaurant.menu} />
        {restaurant.reviews && <Reviews reviews={restaurant.reviews} />}
      </div>
    </section>
  )
}

export default Restaurant;