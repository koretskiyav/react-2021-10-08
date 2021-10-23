import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  restaurantSelector,
  averageRatingSelector,
} from '../../redux/selectors';
import { initRestaurant } from '../../redux/actions';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, averageRating, initRestaurant }) => {
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  useEffect(() => {
    initRestaurant(id);
  }, [id]);

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

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

const mapStateToProps = (state, { id }) => {
  const restaurant = restaurantSelector(state, id);

  return {
    restaurant,
    averageRating: averageRatingSelector(state, restaurant.reviews),
  };
};

const mapDispatchToProps = (dispatch) => ({
  initRestaurant: (id) => dispatch(initRestaurant(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
