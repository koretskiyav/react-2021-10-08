import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';

import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { tabId: 'menu', label: 'Menu' },
    { tabId: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ tabId, label }) => (
          <NavLink
            key={tabId}
            to={`/restaurants/${restaurant.id}/${tabId}`}
            className={styles.tabs}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <Switch>
        <Route path="/restaurants/:restId/menu">
          {({ match }) => <Menu menu={menu} restId={match.params.restId} />}
        </Route>
        <Route path="/restaurants/:restId/reviews">
          {({ match }) => (
            <Reviews reviews={reviews} restId={match.params.restId} />
          )}
        </Route>
        <Redirect to={`/restaurants/${id}/menu`} />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
