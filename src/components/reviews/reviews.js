import React from 'react';
import Review from "./review";


function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => <Review key={review.id} review={review}/>)}
      </ul>
    </div>
  );
}

export default Reviews;