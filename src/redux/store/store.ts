import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

const initialstate = {};

const store = createStore(reducers, initialstate, applyMiddleware(thunk));

export default store;
