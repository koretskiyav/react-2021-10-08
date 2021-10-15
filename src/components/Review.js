
import React from "react";
import Rate from "./Rate";
import styles from "./review.module.css"

function Review({ review }) {

  return (
    <li className={styles.review}>
      <Rate value={review.rating} />
      <p>{review.text}</p>
      <span className={styles.author}>{review.user}</span>
    </li>
  )
}

export default Review;