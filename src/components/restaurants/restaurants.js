import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector, tabsSelector } from '../../redux/selectors';

function Restaurants({ restaurants, tabs }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.object.isRequired
  ).isRequired,
};

export default connect((state) => ({
  restaurants: restaurantsSelector(state),
  tabs: tabsSelector(state),
}))(Restaurants);
