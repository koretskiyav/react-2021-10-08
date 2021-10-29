import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader/loader';
import {
  reviewsListSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

const Restaurant = ({
  restaurant,
  reviews,
  averageRating,
  loading,
  loaded,
  loadReviews,
}) => {
  const { id, name } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  useEffect(() => {
    if (!loading && !loaded) loadReviews(id);
  }, [id, loading, loaded, loadReviews]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu key={id} />}
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
  reviews: reviewsListSelector(state),
  loading: reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state),
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
