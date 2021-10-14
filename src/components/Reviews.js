
import React from "react";
import Review from "./Review";

function Reviews({ reviews }) {

  return (
    <section className="reviews">
      <h3 className="reviews__title">Feedback</h3>
      <ul className="review-list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews;