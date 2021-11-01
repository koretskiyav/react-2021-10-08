import produce from 'immer';
import { CHANGE_RESTAURANT_TAB } from '../constants';

export default produce((draft = { restaurantActiveTab: 'menu' }, action) => {
  const { type, restaurantActiveTab } = action;

  switch (type) {
    case CHANGE_RESTAURANT_TAB:
      draft.restaurantActiveTab = restaurantActiveTab;
      break;
    default:
      return draft;
  }
});
