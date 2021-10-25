import { useState } from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  activeRestaurantSelector,
  averageRestaurantRatingById,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, rating }) => {
  const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={rating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} />}
    </div>
  );
};

export default connect((state) => {
  return {
    restaurant: activeRestaurantSelector(state),
    rating: averageRestaurantRatingById(state),
  };
})(Restaurant);
