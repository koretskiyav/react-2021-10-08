import Rate from "./rate";

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map((review) =>
        <blockquote key={review.id}>
          <strong>{review.user}</strong>: <q>{review.text}</q>
          <Rate value={review.rating} />
        </blockquote>
      )}
    </div>
  );
}
