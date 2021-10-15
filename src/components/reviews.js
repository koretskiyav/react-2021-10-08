import Review from './review';

const Reviews = ({ reviews }) => {
  return (
    <div className="restaurant-reviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
