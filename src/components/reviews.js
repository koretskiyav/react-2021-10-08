import Review from './review';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
}
