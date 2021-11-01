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
import styles from './restaurant.module.css';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: 'menu', label: 'Menu', restId: id },
    { id: 'reviews', label: 'Reviews', restId: id },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <div className={styles.tabs}>
        {tabs.map(({ id, label, restId }) => (
          <NavLink
            key={id}
            to={`/restaurants/${restId}/${id}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route path="/restaurants/:restId/:id">
          {({ match }) => {
            console.log(match.params);

            switch (match.params.id) {
              case 'menu':
                return <Menu menu={menu} key={id} restId={id} />;
              case 'reviews':
                return <Reviews reviews={reviews} restId={id} />;
              default:
                return 'no data((';
            }
          }}
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
