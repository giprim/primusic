import search from './searchReducer';
import theme from './themeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	search,
	theme,
});
