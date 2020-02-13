import {combineReducers, createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';

// import reducers
import main from './reducers/main';

const reducers = combineReducers({main});

const store = createStore(reducers, applyMiddleware(Logger));

export default store;
