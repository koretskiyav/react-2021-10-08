import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';
import uuidGenerator from './middleware/uuidGenerator';

import reducer from './reducer';

const middlewares = [logger, uuidGenerator];

export default createStore(
  reducer,
  applyMiddleware(...middlewares),
);
