
import React, { useState } from "react";
import Rate from "./Rate";
import Menu from "./menu";

function Restaurant({ restaurant }) {

  const [rating, setRating] = useState(0);
  let ratingValues = restaurant.reviews.map((item) => item.rating)
  let totalRating = ratingValues.reduce((sum, current) => {
    return sum + current
  }, 0)
  setRating(totalRating / restaurant.reviews.length);

  return (
    <section className="restaurant">
      <h2 className="restaurant__title">{restaurant.name}</h2>
      <div className="restaurant__info">
        <Rate value={rating} />
        <Menu menu={restaurant.menu} />
      </div>
    </section>
  )
}

export default Restaurant;