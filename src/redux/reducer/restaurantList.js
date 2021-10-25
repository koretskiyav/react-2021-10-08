import { normalizedRestaurants } from '../../fixtures';
import { SET_ACTIVE_RESTAURANT } from '../constants';

const defaultRestaurantList = normalizedRestaurants.map(
  (restaurant, index) => ({
    id: restaurant.id,
    isActive: index === 0,
  })
);

export default (restaurantList = defaultRestaurantList, action) => {
  const { type, id } = action;

  switch (type) {
    case SET_ACTIVE_RESTAURANT:
      return restaurantList.map((val) => {
        return {
          ...val,
          isActive: id === val.id,
        };
      });
    default:
      return restaurantList;
  }
};
