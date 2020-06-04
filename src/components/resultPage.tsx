import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchNext from '../redux/actions/fetchNext';
import { LOADING } from '../redux/types';
import {
	UnorderedListOutlined,
	AppstoreOutlined,
	ArrowUpOutlined,
} from '@ant-design/icons';
import SkeletonComp from './skeleton/skeleton';
import PerResult from './PerResult/PerResult';

const pages: string[] = [];

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);
	const dispatch = useDispatch();
	const [toggleList, setToggleList] = useState(true);
	const [pagination, setPagination] = useState(pages);
	const [tracks, setTracks] = useState(25);

	let { loaded } = search_result;

	const handleNextFetch = () => {
		if (!pagination.find((url) => url === search_result.next)) {
			setPagination([...pagination, search_result.next]);
		}
		dispatch({ type: LOADING });
		dispatch(fetchNext(search_result.next));
		setTracks((prev) => prev + search_result.data.length);
	};

	const changeListOrder = () => {
		setToggleList((prev) => !prev);
	};

	const class_names = {
		grid: {
			col: 'col-lg-3',
			layout: 'gi-grid',
		},
		list: {
			col: 'col-lg-12',
			layout: 'gi-list',
		},
	};

	// console.log(toggleList ? class_names.grid : class_names.list);

	return (
		<div className='container mt-5 py-5' id='top'>
			<div className='py-4'>
				{loaded && (
					<button className='gi-btn' onClick={changeListOrder}>
						{!toggleList ? <UnorderedListOutlined /> : <AppstoreOutlined />}
					</button>
				)}
			</div>
			{loaded ? (
				<>
					<div className='row'>
						{search_result.data &&
							search_result.data.map((track: any) => (
								<PerResult
									key={track.id}
									//@ts-ignore
									track={track}
									class_name={toggleList ? class_names.grid : class_names.list}
								/>
							))}
					</div>
					<div className='flex_container py-5'>
						<button
							className={`btn_ ${search_result.prev ? 'show_' : 'hide_'}`}
							onClick={() => {
								dispatch({ type: LOADING });
								dispatch(fetchNext(search_result.prev));
								setTracks((prev) => prev - search_result.data.lenght);
							}}>
							previous
						</button>

						<span className='track_count'>{`${tracks} of ${search_result.total}`}</span>

						<button
							className={`btn_ ${search_result.next ? 'show_' : 'hide_'}`}
							onClick={handleNextFetch}>
							next
						</button>
					</div>
				</>
			) : (
				<div className={'skeleton-loaders'}>
					<SkeletonComp />
					<SkeletonComp />
					<SkeletonComp />
					<SkeletonComp />
				</div>
				// <div className='d-flex'>
				// 	<div className='spinner-border mx-auto mt-5' role='status'>
				// 		<span className='sr-only'>Loading...</span>
				// 	</div>
				// </div>
			)}
			<a href='#top' className={`btn_ p_fixed ${loaded ? 'show_' : 'hide_'}`}>
				<ArrowUpOutlined />
			</a>
		</div>
	);
};

export default ResultPage;
