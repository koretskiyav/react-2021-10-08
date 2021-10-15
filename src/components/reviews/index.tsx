import { IReviews } from '../../types/restaurant';
import { RateWithLabel } from '../rate';

interface IProps {
  reviews: IReviews[];
}

export const Reviews = ({ reviews }: IProps) => {
  const reviewsList = reviews.map(({ id, user, text, rating }) =>
    <div key={id}>
      <RateWithLabel
        label={
          <p>
            <strong>{user}</strong>: <i>{text}</i>
          </p>
        }
        rate={rating} />
    </div>
  );

  return (
    <div>
      <h3>Reviews:</h3>
      {reviewsList}
    </div>
  );
};
