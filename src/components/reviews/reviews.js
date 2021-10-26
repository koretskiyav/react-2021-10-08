import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import {restaurantsSelector} from "../../redux/selectors";

const Reviews = ({ currentRestaurant, restaurants }) => {
  return (
    <div className={styles.reviews}>

      {restaurants[currentRestaurant].reviews.map((id) => (
        <Review key={id} reviewId={id} />
      ))}
      <ReviewForm id={currentRestaurant}/>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state, props) => ({
    restaurants: restaurantsSelector(state)
});

export default connect(mapStateToProps)(Reviews);
