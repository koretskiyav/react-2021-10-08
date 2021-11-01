import { connect } from 'react-redux';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import styles from '../tabs/tabs.module.css';

const Restaurant = ({ restaurant, averageRating }) => {

  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>

      <div>
        <Banner heading={name}>
          <Rate value={averageRating} />
        </Banner>
        <div className={styles.tabs}>
          {tabs.map((tab) => {
            return (
              <NavLink
                to={`/restaurants/${id}/${tab.id}`}
                key={tab.id}
                className={styles.tab}
                activeClassName={styles.active}>
                {tab.label}
              </NavLink>
            )
          })}
        </div>
      </div>

      <Switch>
        <Route path={`/restaurants/${id}/menu`}>
          <Menu menu={menu} key={id} restId={id} />
        </Route>
        <Route path={`/restaurants/${id}/reviews`}>
          <Reviews reviews={reviews} restId={id} />
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
