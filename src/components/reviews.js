import Review from "./review";


export default function  Reviews({ reviews }) {
  return (
    <div>
      <h3>Оценки и отзывы</h3>
      <ul>
        {reviews.map(review => <Review key={review.id} review={review} />)}
      </ul>
    </div>
  );
}

