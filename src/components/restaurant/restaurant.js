import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  console.log('----- restaraunt.reviews: ', reviews);
  const [activeTab, setActiveTab] = useState('menu');

  // const averageRating = useMemo(() => {
  //   const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
  //   return Math.round(total / reviews.length);
  // }, [reviews]);

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};

Restaurant.defaultProps = {
  averageRating: 3,
};

// Restaurant.propTypes = {
//   restaurant: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string,
//     menu: PropTypes.array,
//     reviews: PropTypes.arrayOf(
//       PropTypes.shape({
//         rating: PropTypes.number.isRequired,
//       }).isRequired
//     ).isRequired,
//   }).isRequired,
// };

export default connect((state, props) => {
  return {
    restaurant: restaurantSelector(state)(props.id),
    averageRating: averageRatingSelector(state)(props.id),
  };
})(Restaurant);
