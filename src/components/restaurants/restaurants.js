import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { tabsSelector, restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants, tabs }) {
  const [activeId, setActiveId] = useState(restaurants[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
    </div>
  );
}

// Restaurants.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string,
//     }).isRequired
//   ).isRequired,
// };

export default connect((state) => {
  return {
    tabs: tabsSelector(state),
    restaurants: restaurantsSelector(state),
  };
})(Restaurants);
