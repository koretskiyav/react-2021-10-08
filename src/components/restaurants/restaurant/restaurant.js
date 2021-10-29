import { connect } from 'react-redux';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../restaurants.module.css';
import Menu from '../../menu';
import Reviews from '../../reviews';
import Banner from '../../banner';
import Rate from '../../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../../redux/selectors';

const Restaurant = ({ restaurant = {}, averageRating }) => {
  const { name, menu, reviews } = restaurant;
  const restId = restaurant.id;
  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ id, label }) => (
          <NavLink
            key={id}
            to={`/restaurants/${restId}/${label.toLowerCase()}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path="/restaurants/:restId/menu">
          <Menu menu={menu} key={restId} restId={restId} />
        </Route>
        <Route path="/restaurants/:restId/reviews">
          <Reviews key={restId} reviews={reviews} restId={restId} />
        </Route>
        <Redirect to={`/restaurants/${restId}/menu`} />
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
