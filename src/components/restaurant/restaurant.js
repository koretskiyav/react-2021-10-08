import { useEffect, useState } from 'react';
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
  reviewLoadedSelector,
  reviewLoadingSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

const Restaurant = ({
  restaurant,
  averageRating,
  loaded,
  loading,
  loadReviews,
  restId,
}) => {
  useEffect(() => {
    if (!loaded && !loading) loadReviews(restId);
  }, [restId, loadReviews, loaded, loading]);

  const { id, name, menu, reviews } = restaurant;

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
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} restId={id} />}
      {activeTab === 'reviews' && <Reviews reviews={reviews} restId={id} />}
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
  restId: props.id,
  loaded: reviewLoadedSelector(state, props),
  loading: reviewLoadingSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadReviews: () => dispatch(loadReviews(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
