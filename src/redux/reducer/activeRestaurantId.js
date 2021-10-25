import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { SET_ACTIVE_RESTAURANT } from '../constants';

export default function (
  activeRestaurantId = defaultRestaurants.find((item) => item).id,
  action
) {
  const { type, id } = action;
  switch (type) {
    case SET_ACTIVE_RESTAURANT:
      return id;
    default:
      return activeRestaurantId;
  }
}
