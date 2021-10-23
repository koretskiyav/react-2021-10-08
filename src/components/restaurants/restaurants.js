import { useState } from 'react';
import { connect } from 'react-redux';
import { restaurantIdsSelector, tabsSelector } from '../../redux/selectors';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurantIds, tabs }) {
  const [activeId, setActiveId] = useState(restaurantIds[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurantIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tabs: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tabs: tabsSelector(state),
  restaurantIds: restaurantIdsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
