import { DECREMENT, INCREMENT, REMOVE } from '../constants';

const remove = (state, id) =>
  Object.entries(state).reduce(
    (acc, [key, value]) => (key === id ? acc : { ...acc, [key]: value }),
    {}
  );

const decrement = (state, amount, id) => {
  switch (amount) {
    case 0:
      return state;
    case 1:
      return remove(state, id);
    default:
      return { ...state, [id]: amount - 1 };
  }
};

export default function (state = {}, action) {
  const { type, id } = action;
  const amount = state[id] || 0;

  switch (type) {
    case INCREMENT:
      return { ...state, [id]: amount + 1 };
    case DECREMENT:
      return decrement(state, amount, id);
    case REMOVE:
      return remove(state, id);
    default:
      return state;
  }
}
