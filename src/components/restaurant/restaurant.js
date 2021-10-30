import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const restId = id;

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.rtabs}>
        {tabs.map(({ id, label }) => (
          <NavLink
            key={id}
            to={`/restaurants/${restId}/${id}`}
            className={styles.rtab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path="/restaurants/:restId/menu">
          {<Menu menu={menu} key={id} restId={id} />}
        </Route>
        <Route path="/restaurants/:restId/reviews">
          {<Reviews reviews={reviews} restId={id} />}
        </Route>
        <Redirect to={`/restaurants/:restId/menu`} />
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
