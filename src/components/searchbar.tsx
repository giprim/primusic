import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Searchbar = () => {
	const [query, setQuery] = useState('');

	const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(query);
	};

	return (
		<div className='gi_width_res'>
			<form onSubmit={handlerSearch}>
				<Input
					size='large'
					prefix={<SearchOutlined className='searchIcon' />}
					placeholder='Search...'
					className='searchBar'
					type='Search'
					onChange={e => setQuery(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
