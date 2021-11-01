import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { Redirect, Route, Switch } from 'react-router-dom';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name } = restaurant;

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <Route path="/restaurants/:restId/:activeId" component={Tabs} />

      <Switch>
        <Route
          path="/restaurants/:restId/menu"
          component={({ match }) => {
            /* Сохраняем поведение с ререндером*/
            const restId = match.params.restId;
            return <Menu key={restId} restId={restId} />;
          }}
        />
        <Route path="/restaurants/:restId/reviews" component={Reviews} />
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
