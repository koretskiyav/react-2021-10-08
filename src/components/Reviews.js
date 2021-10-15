
import React from "react";
import Review from "./Review";
import styles from "./reviews.module.css"

function Reviews({ reviews }) {

  return (
    <section className={styles.reviews}>
      <h3>Feedback</h3>
      <ul className={styles.reviews__list}>
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