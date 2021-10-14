import Rate from './rate';

export default function Review({ review }) {
  return (
    <div>
      <h2>{review.user}</h2>
      <p>{review.text}</p>
      <Rate value={review.rating} />
    </div>
  );
}
