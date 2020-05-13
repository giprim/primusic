import { MAKE_A_SEARCH } from '../types';
import { IArtist, IActions } from '../../interfaces';

const initialState: IArtist = {
	data: {},
	next: '',
	total: 0,
};

export default (state = initialState, action: IActions) => {
	switch (action.type) {
		case MAKE_A_SEARCH:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
