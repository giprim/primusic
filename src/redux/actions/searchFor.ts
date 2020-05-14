import { Dispatch } from 'redux';
import axios from 'axios';
import { MAKE_A_SEARCH, RESULT_FOUND } from '../types';

export default (text: string) => {
	return (dispatch: Dispatch) => {
		axios({
			method: 'GET',
			url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
			headers: {
				'content-type': 'application/octet-stream',
				'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
				'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed',
				useQueryString: true,
			},
			params: {
				q: text,
			},
		})
			.then((res) =>
				dispatch({
					type: MAKE_A_SEARCH,
					payload: res.data,
				})
			)
			.catch((err) =>
				dispatch({
					type: RESULT_FOUND,
					payload: err,
				})
			);
	};
};
