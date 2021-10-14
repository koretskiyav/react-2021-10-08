import { IReviews } from '../../types/restaurant';
import { RateWithLabel } from '../rate';

interface IProps {
  reviews: IReviews[];
}

export const Reviews = ({ reviews }: IProps) => {
  const reviewsList = reviews.reduce((acc, { id, user, text, rating }) => {
    acc.push(
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

    return acc
  }, [] as JSX.Element[]);

  return (
    <div>
      <h3>Reviews:</h3>
      {reviewsList}
    </div>
  );
};
