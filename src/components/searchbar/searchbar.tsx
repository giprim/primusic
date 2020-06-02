import React, { CSSProperties, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchFor from '../../redux/actions/searchFor';
import Search from 'antd/lib/input/Search';
import { useHistory } from 'react-router-dom';
import { LOADING } from '../../redux/types';

interface cssStyle {
	css?: CSSProperties;
}

const Searchbar: React.FC<cssStyle> = ({ css }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const stateQuery = useSelector((state: any) => state.search);
	const [searchValue, setSearchValue] = useState();

	useEffect(() => {
		setSearchValue(stateQuery.query);
	}, []);

	const handlerSearch = (
		text: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent>
			| React.KeyboardEvent<HTMLInputElement>
			| undefined
	) => {
		event?.preventDefault();

		if (text !== '') {
			dispatch({ type: LOADING });
			dispatch(searchFor(text));
		}
		history.push('/result');
	};

	return (
		<div className='gi_width_res'>
			<Search
				style={css}
				allowClear
				// value={stateQuery ? stateQuery : searchValue}
				value={searchValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					//@ts-ignore
					setSearchValue(e.target.value)
				}
				placeholder='Search for track, artist, album...'
				className='searchBar'
				onSearch={handlerSearch}
			/>
		</div>
	);
};

export default Searchbar;
