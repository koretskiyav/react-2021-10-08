import { useMemo } from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import styles from './restaurant.module.css';
import propTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu key={id} menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    menu: propTypes.array.isRequired,
    reviews: propTypes.array.isRequired,
  }),
};
export default Restaurant;
