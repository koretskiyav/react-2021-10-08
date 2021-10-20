import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from './reducer';

const middlewares = [logger];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
