import { IActions } from '../../interfaces';
import { THEME } from '../types';

const initstate: boolean = false;
export default (state = initstate, action: IActions) => {
	switch (action.type) {
		case THEME:
			return (state = action.payload);
		default:
			return state;
	}
};
