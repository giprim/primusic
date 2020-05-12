import { makeAsearchReducer } from './makeAsearchReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	search: makeAsearchReducer,
});

export default reducers;
