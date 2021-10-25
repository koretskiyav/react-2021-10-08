import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);
  const tabs = useMemo(
    () => Object.entries(restaurants).map(([id, { name }]) => ({ id, label: name })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default connect((state) => ({ restaurants: restaurantsSelector(state) }))(Restaurants);
