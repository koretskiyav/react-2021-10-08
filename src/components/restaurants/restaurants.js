import { connect } from 'react-redux';
import {
  activeIdRestaurantSelector,
  tabsSelector,
} from '../../redux/selectors';
import { initRestaurant } from '../../redux/actions';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ tabs, restaurantId, initRestaurant }) {
  return (
    <div>
      <Tabs tabs={tabs} onChange={initRestaurant} activeId={restaurantId} />
      <Restaurant id={restaurantId} />
    </div>
  );
}

Restaurants.propTypes = {
  tabs: PropTypes.array,
};

const mapStateToProps = (state) => ({
  restaurantId: activeIdRestaurantSelector(state),
  tabs: tabsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  initRestaurant: (id) => dispatch(initRestaurant(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
