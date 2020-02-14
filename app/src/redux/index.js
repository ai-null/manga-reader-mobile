import {combineReducers, createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';

// import reducers
import main from './reducers/main';
import detail from './reducers/detail';

const reducers = combineReducers({main, detail});

const store = createStore(reducers, applyMiddleware(Logger));

export default store;
