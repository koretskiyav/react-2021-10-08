import { useState } from 'react';
import { connect } from 'react-redux';
import { tabsSelector } from '../../redux/selectors';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants, tabs }) {
  const [activeId, setActiveId] = useState(restaurants[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tabs: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tabs: tabsSelector(state),
  restaurants: Object.keys(state.restaurants),
});

export default connect(mapStateToProps)(Restaurants);
