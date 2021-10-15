import Rate from './rate';

const Review = ({ review: { user, text, rating } }) => {
  return (
    <div className="restaurant-review">
      <p>{user}</p>
      <p>{text}</p>
      <Rate value={rating} className="review-rating"></Rate>
    </div>
  );
};

export default Review;
