import { Dispatch } from 'redux';
import Axios from 'axios';
import { FETCH_NEXT } from '../types';

const fetchNext = (url: string) => {
	return (dispatch: Dispatch) => {
		Axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
			.then((res) => {
				dispatch({
					type: FETCH_NEXT,
					payload: res.data,
				});
			})
			.catch((err) => console.error(err));
	};
};

export default fetchNext;
