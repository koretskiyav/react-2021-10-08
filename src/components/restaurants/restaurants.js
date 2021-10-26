import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const [firstKey] = Object.keys(restaurants);
  const [activeId, setActiveId] = useState(restaurants[firstKey].id);

  const tabs = useMemo(
    () => Object.keys(restaurants).map((key) => {
      return {id: restaurants[key].id, label: restaurants[key].name};
    }),
    [restaurants]
  );

  const activeRestaurant = restaurants[activeId]

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
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
