import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import searchFor from '../../redux/actions/searchFor';
import Search from 'antd/lib/input/Search';

const Searchbar: React.FC = () => {
	const dispatch = useDispatch();

	const handlerSearch = (
		text: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent>
			| React.KeyboardEvent<HTMLInputElement>
			| undefined
	) => {
		if (text !== '') dispatch(searchFor(text));
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
