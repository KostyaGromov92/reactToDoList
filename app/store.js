import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../app/reducerFactory';
import {createLogger} from 'redux-logger';
import rootSaga from '../app/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') { // окружение приложения - "production", "development", или "test

  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(rootSaga, store);
  return store;
};

