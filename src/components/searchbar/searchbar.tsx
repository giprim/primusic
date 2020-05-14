import React from 'react';
import { useDispatch } from 'react-redux';
import searchFor from '../../redux/actions/searchFor';
import Search from 'antd/lib/input/Search';
import { useHistory } from 'react-router-dom';

const Searchbar: React.FC = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handlerSearch = (
		text: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent>
			| React.KeyboardEvent<HTMLInputElement>
			| undefined
	) => {
		event?.preventDefault();
		if (text !== '') dispatch(searchFor(text));
		history.push('/result');
	};

	return (
		<div className='gi_width_res'>
			<Search
				allowClear
				placeholder='Search...'
				className='searchBar'
				onSearch={handlerSearch}
			/>
		</div>
	);
};

export default Searchbar;
