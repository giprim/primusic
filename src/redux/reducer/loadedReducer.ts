import { IActions } from '../../interfaces';
import { LOADING, LOADED, MAKE_A_SEARCH, FETCH_NEXT } from '../types';
const initialState = false;
export default (state = initialState, action: IActions) => {
	switch (action.type) {
		case MAKE_A_SEARCH || FETCH_NEXT:
			return state;
		case LOADED:
			return (state = true);
		default:
			return state;
	}
};
