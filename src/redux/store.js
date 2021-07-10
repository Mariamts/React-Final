import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { autoLoginMiddleware, autoFillDataMiddleware } from './middlewares';

import rootReducer from './reducers';

// const middleware = [thunk];
const middleware = [autoLoginMiddleware, autoFillDataMiddleware, thunk];

const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
