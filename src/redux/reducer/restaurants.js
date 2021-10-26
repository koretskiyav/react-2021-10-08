import produce from 'immer';
import { ADD_REVIEW, CHANGE_RESTAURANT, LOAD_RESTAURANTS } from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  activeId: null,
  entities: {},
};

export default (state = initialState, action) => {
  const { type, restId, reviewId, activeId, data } = action;

  switch (type) {
    case LOAD_RESTAURANTS:
      return { ...state, activeId: data[0].id, entities: arrToMap(data) };
    case CHANGE_RESTAURANT:
      return { ...state, activeId };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
