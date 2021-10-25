import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants, reviews }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);
  const tabs = useMemo(
    () => Object.entries(restaurants).map(([id, { name }]) => ({ id, label: name })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} allReviews={reviews} />
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

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(Restaurants);
