import { createStore, applyMiddleware } from 'redux';
import { effectsMiddleware } from 'redux-effex';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import effects from '../effects';

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJS(),
});

const createStoreWithMiddleware = applyMiddleware(
  effectsMiddleware(effects),
  loggerMiddleware
)(createStore);

export default (initialState) => (
  createStoreWithMiddleware(reducer, initialState)
);
