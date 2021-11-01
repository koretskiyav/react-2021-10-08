import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id: restaurantId, name, menu, reviews } = restaurant;

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
            to={`/restaurants/${restaurantId}/${id}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path="/restaurants/:restId/:activeTab">
          {({ match }) => {
            switch (match.params.activeTab) {
              case 'menu':
                return <Menu menu={menu} key={restaurantId} restId={restaurantId} />;
              case 'reviews':
                return <Reviews reviews={reviews} restId={restaurantId} />;
              default:
                return null;
            }
          }}
        </Route>
        <Redirect to={`/restaurants/${restaurantId}/${tabs[0]?.id}`} />
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
