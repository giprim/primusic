import { makeASearchAction } from '../actions/makeAsearchAction';
import { MAKE_A_SEARCH } from '../types';

const initialState: {}[] = [];

export const makeAsearchReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case MAKE_A_SEARCH:
			console.log(MAKE_A_SEARCH);
	}
};
