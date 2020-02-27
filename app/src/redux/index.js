import {combineReducers, createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';

// import reducers
import main from './reducers/main';
import detail from './reducers/detail';
import read from './reducers/read';

const reducers = combineReducers({main, detail, read});

const store = createStore(reducers, applyMiddleware(Logger));

export default store;
