import { connect } from 'react-redux';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { setActiveRestaurant } from '../../redux/actions';
import {
  restaurantActiveIdSelector,
  restaurantListNameSelector,
} from '../../redux/selectors';

function Restaurants({ tabs, activeId, setActiveRestaurant }) {
  return (
    <div>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveRestaurant} />
      <Restaurant />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tabs: restaurantListNameSelector(state),
  activeId: restaurantActiveIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveRestaurant: (id) => dispatch(setActiveRestaurant(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
