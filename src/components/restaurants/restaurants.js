import { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { setActiveRestaurantId } from '../../redux/actions';
import {
  restaurantsSelector,
  activeRestaurantIdSelector,
} from '../../redux/selectors';

function Restaurants({ restaurants, activeId, setActiveRestaurantId }) {
  const tabs = useMemo(
    () =>
      Object.values(restaurants).map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveRestaurantId} activeId={activeId} />
      <Restaurant id={activeId} />
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
  activeId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsSelector(state),
  activeId: activeRestaurantIdSelector(state),
});

const mapDispathcToProps = {
  setActiveRestaurantId,
};

export default connect(mapStateToProps, mapDispathcToProps)(Restaurants);
