import style from './review.module.css';
import Rate from '../Rate';

export default function Review({ review }) {
  return (
    <div className={style.review_card}>
      <h3>{review.user}</h3>
      <p>{review.text}</p>
      <Rate value={review.rating} />
    </div>
  );
}
