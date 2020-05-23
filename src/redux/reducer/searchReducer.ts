import { MAKE_A_SEARCH, FETCH_NEXT } from '../types';
import { IArtist, IActions } from '../../interfaces';

const initialState: IArtist = {
	data: [],
	next: '',
	prev: '',
	total: 0,
};

export default (state = initialState, action: IActions) => {
	switch (action.type) {
		case MAKE_A_SEARCH:
			return {
				...state,
				data: [...action.payload.data],
				next: action.payload.next,
				total: action.payload.total,
			};
		case FETCH_NEXT:
			return {
				...state,
				data: [...action.payload.data],
				next: action.payload.next,
				prev: action.payload.prev,
				total: action.payload.total,
			};
		default:
			return state;
	}
};
