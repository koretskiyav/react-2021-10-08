import { useState, useMemo } from 'react';

import Restaurant from '../restaurant';
import Tabs from '../tabs';
import PropTypes from "prop-types";

const Restaurants = ({ restaurants }) => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
