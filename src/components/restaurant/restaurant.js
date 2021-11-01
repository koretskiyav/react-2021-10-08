import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';
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
  const { name, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

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
            to={`/restaurants/${restaurant.id}/${id}`}
            className={cn(styles.tab, { [styles.active]: id === activeTab })}
            onClick={() => setActiveTab(id)}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route
          path="/restaurants/:restId/menu"
          component={({ match }) => {
            const restId = match.params.restId;
            return <Menu key={restId} restId={restId} />;
          }}
        />
        <Route path="/restaurants/:restId/reviews">
          {({ match }) => <Reviews reviews={reviews} restId={restaurant.id} />}
        </Route>
        <Redirect to={`/restaurants/${restaurant.id}/menu`} />
      </Switch>
      {/* {activeTab === 'menu' && <Menu menu={menu} key={id} restId={id} />} */}
      {/* {activeTab === 'reviews' && <Reviews reviews={reviews} restId={id} />} */}
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
