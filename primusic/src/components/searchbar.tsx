import React from 'react';
import Form from 'antd/lib/form/Form';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Searchbar = () => {
	return (
		<div className='gi_width_res'>
			<Form>
				<Input
					size='large'
					prefix={<SearchOutlined className='searchIcon' />}
					placeholder='Search...'
					className='searchBar'
					type='Search'
				/>
			</Form>
		</div>
	);
};

export default Searchbar;
