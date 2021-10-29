import { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  averageRatingSelector,
  restaurantSelector,
  reviewsLoadedSelector,
  reviewsLoadingSelector,
} from '../../redux/selectors';
import { loadReviews } from '../../redux/actions';

const Restaurant = ({
  restaurant,
  averageRating,
  loadReviews,
  reviwesLoading,
  reviewsLoaded,
}) => {
  const { id, name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');
  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  useEffect(() => {
    if (!reviwesLoading && !reviewsLoaded) loadReviews(id);
  }, [id, loadReviews, reviwesLoading, reviewsLoaded]);

  const rateComponent = useMemo(() => {
    if (reviwesLoading) return <Loader />;
    if (!reviewsLoaded) return <Rate value={0} />;
    return <Rate value={averageRating} />;
  }, [reviwesLoading, reviewsLoaded, averageRating]);

  const reviewsComponent = useMemo(() => {
    if (reviwesLoading) return <Loader />;
    if (!reviewsLoaded) return <Reviews reviews={[]} restId={id} />;
    return <Reviews reviews={reviews} restId={id} />;
  }, [reviwesLoading, reviewsLoaded, id, reviews]);

  return (
    <div>
      <Banner heading={name}>{rateComponent}</Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} restId={id} />}
      {activeTab === 'reviews' && reviewsComponent}
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
  reviwesLoading: reviewsLoadingSelector(state, props),
  reviewsLoaded: reviewsLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
};
export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
