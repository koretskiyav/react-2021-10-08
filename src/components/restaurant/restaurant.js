import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, averageRating, activeTab }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: 'menu', label: 'Menu', route: `/restaurants/${id}/menu` },
    { id: 'reviews', label: 'Reviews', route: `/restaurants/${id}/reviews` },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <Tabs tabs={tabs} activeId={activeTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} restId={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} restId={id} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
  activeTab: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
