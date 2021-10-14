
import React, { useState } from "react";
import Review from "./Review";
import Rate from "./Rate";

function Reviews({ reviews, raiting }) {
  const [rating, setRating] = useState(0);
  let ratingValues = reviews.map((item) => item.rating)
  let totalRating = ratingValues.reduce((sum, current) => {
    return sum + current
  }, 0)
  setRating(totalValue / reviews.length)
  return (
    <section className="reviews">
      <h3 className="reviews__title">Raiting</h3>
      <Rate value={ } />
      <ul className="review-list">
        {reviews.map((review) => (
          <Review
            key={review._id}
            review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews;