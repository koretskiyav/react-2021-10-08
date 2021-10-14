
import React from "react";
import Rate from "./Rate";

function Review(props) {
  return (
    <li className="review">
      <Rate value={props.rating} />
      <p className="review__feedback">{props.text}</p>
      <span classname="review__author">{props.user}</span>
    </li>
  )
}

export default Review;