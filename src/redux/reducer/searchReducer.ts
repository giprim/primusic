import { MAKE_A_SEARCH, FETCH_NEXT } from '../types';
import { IArtist, IActions } from '../../interfaces';

const initialState: IArtist = {
	query: '',
	data: [],
	next: '',
	prev: '',
	total: 0,
	loaded: false,
};

export default (state = initialState, action: IActions) => {
	switch (action.type) {
		case MAKE_A_SEARCH:
			return {
				...state,
				data: [...action.payload.data],
				next: action.payload.next,
				total: action.payload.total,
				query: action.query,
				loaded: action.loaded,
			};
		case FETCH_NEXT:
			return {
				...state,
				data: [...action.payload.data],
				next: action.payload.next,
				prev: action.payload.prev,
				total: action.payload.total,
				loaded: action.loaded,
				// query: action.query
			};
		default:
			return state;
	}
};
