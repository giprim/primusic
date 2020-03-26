import React, { useState, useRef } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { RouteProps, RouteComponentProps } from 'react-router-dom';

const { Search } = Input;

interface searchBarProps {
	history: any;
}

const Searchbar: React.FC<searchBarProps & RouteComponentProps> = (
	{ history },
	props
) => {
	const [query, setQuery] = useState('');
	console.log(props);
	const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// history.push('/results');
	};

	const searchInputEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const Form: HTMLCollectionOf<HTMLFormElement> = document.forms;
		const searchform = Form[0].name === 'searchForm' ? Form[0] : null;
		if (event.keyCode === 13 && query !== '') searchform?.submit();
	};

	return (
		<div className='gi_width_res'>
			<form onSubmit={handlerSearch} name='searchForm'>
				<Input
					size='large'
					prefix={<SearchOutlined className='searchIcon' />}
					placeholder='Search...'
					className='searchBar'
					type='Search'
					onKeyUp={searchInputEvent}
					onChange={e => setQuery(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
