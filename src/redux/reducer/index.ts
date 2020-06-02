import search from './searchReducer';
import theme from './themeReducer';
import loaded from './loadedReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	search,
	theme,
	loaded,
});
