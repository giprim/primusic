import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import searchFor from '../../redux/actions/searchFor';
import Search from 'antd/lib/input/Search';
import { Route, Redirect } from 'react-router-dom';

const Searchbar: React.FC = () => {
	const searchResult = useSelector((state) => state);
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
		return <Redirect to={'/result'} push={true} />;
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
