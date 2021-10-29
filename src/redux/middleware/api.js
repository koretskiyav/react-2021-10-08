import { FAILURE, REQUEST, SUCCESS } from '../constants';

const loadedItems = {};

export default (store) => (next) => async (action) => {
  if (!action.CallAPI || loadedItems[action.CallAPI]) return next(action);

  const { CallAPI, type, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  try {
    const data = await fetch(CallAPI).then((res) => res.json());
    next({ ...rest, type: type + SUCCESS, data });
    loadedItems[action.CallAPI] = true;
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
