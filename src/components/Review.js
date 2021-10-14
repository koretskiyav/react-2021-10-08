
import React from "react";
import Rate from "./Rate";

function Review({ review }) {
  console.log({ review })
  return (
    <li className="review">
      <Rate value={review.rating} />
      <p className="review__feedback">{review.text}</p>
      <span className="review__author">{review.user}</span>
    </li>
  )
}

export default Review;