import React from 'react';
import Rate from "../rate/rate";
import styles from './reviews.module.css';

function Review(props) {
  const {review} = props
  return (
    <li className={styles.card}>
      <strong>{review.user}</strong>
      <p>{review.text}</p>
      <Rate rating={review.rating} />
    </li>
  );
}

export default Review;