import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../app/reducerFactory';
import {createLogger} from 'redux-logger';

const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
};