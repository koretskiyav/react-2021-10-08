import Review from './Review';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>Отзывы</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
