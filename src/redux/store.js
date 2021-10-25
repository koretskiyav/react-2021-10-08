import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';

import reducer from './reducer';
import submit from './middleware/submit';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, submit))
);
