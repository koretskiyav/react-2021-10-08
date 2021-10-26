import { useState } from 'react';
import { connect } from 'react-redux';
import { restaurantListSelector, tabsSelector } from '../../redux/selectors';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurantList, tabs }) {
  const [activeId, setActiveId] = useState(restaurantList[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurantList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tabs: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tabs: tabsSelector(state),
  restaurantList: restaurantListSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
