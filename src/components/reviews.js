import Rate from './rate';
import { restaurants } from '../fixtures';

export default function Reviews(props) {
  const filtredResult = restaurants.filter(
    (elem) => elem.id === props.restId
  )[0].reviews;
  return filtredResult.map((review) => (
    <div key={review.id} style={{ border: '1px solid black' }}>
      {review.user}
      <br />
      <Rate value={review.rating} />
      <br />
      {review.text}
    </div>
  ));
}
