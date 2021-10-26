import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { tabsSelector } from '../../redux/selectors';

function Restaurants({ tabs }) {
  const [activeId, setActiveId] = useState(tabs[0].id);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurantId={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
      }.isRequired
    ).isRequired
  ),
};

const mapStateToProps = (state) => ({
  tabs: tabsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
