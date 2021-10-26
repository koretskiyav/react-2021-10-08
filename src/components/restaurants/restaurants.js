import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  activeIdRestaurantSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadRestaurants, changeRestaurant } from '../../redux/actions';

function Restaurants({
  restaurants,
  activeId,
  loading,
  loaded,
  loadRestaurants,
  changeRestaurant,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Tabs tabs={tabs} onChange={changeRestaurant} activeId={activeId} />
      <Restaurant id={activeId} />
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
  activeId: activeIdRestaurantSelector(state),
  restaurants: restaurantsListSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadRestaurants,
  changeRestaurant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
