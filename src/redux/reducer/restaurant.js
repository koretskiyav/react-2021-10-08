import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { INIT_RESTAURANT } from '../constants';

const activeId = defaultRestaurants[0].id;

export default (state = activeId, action) => {
  const { type, id } = action;

  switch (type) {
    case INIT_RESTAURANT: {
      return id;
    }
    default:
      return state;
  }
};
