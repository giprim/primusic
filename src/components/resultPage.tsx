import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { truncateText } from '../Functionalities/functionalities';
import fetchNext from '../redux/actions/fetchNext';
import {
	PlayCircleFilled,
	UnorderedListOutlined,
	AppstoreOutlined,
} from '@ant-design/icons';

const pages: string[] = [];

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);
	const dispatch = useDispatch();
	const [toggleList, setToggleList] = useState(true);
	const [pagination, setPagination] = useState(pages);

	const PerResult = (tracks: any) => {
		const { track } = tracks;
		return (
			<div
				key={track.id}
				className={`${toggleList ? 'col-lg-3 p-3' : 'col-lg-12 p-3'}`}>
				<div className={`box ${toggleList ? 'gi-grid' : 'gi-list'}`}>
					<img
						src={track.album.cover_big}
						className='img-fluid'
						alt={track.album.title}
					/>
					<div className='flex_box'>
						<div>
							<h4 className='h3 text-center'>{truncateText(track.title)}</h4>
							<h6 className='text-center h6'>{track.artist.name}</h6>
						</div>
						<div className='d-flex'>
							<audio controls className='gi-audio' src={track.preview}>
								<PlayCircleFilled />
							</audio>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const handleNextFetch = () => {
		if (!pagination.find((url) => url === search_result.next)) {
			setPagination([...pagination, search_result.next]);
		}
		dispatch(fetchNext(search_result.next));
	};

	const changeListOrder = () => {
		setToggleList((prev) => !prev);
	};

	console.log(pagination);

	return (
		<div className='container mt-5 pt-5'>
			<div className='py-4'>
				{search_result.data.length !== 0 && (
					<button className='gi-btn' onClick={changeListOrder}>
						{!toggleList ? <UnorderedListOutlined /> : <AppstoreOutlined />}
					</button>
				)}
			</div>
			{search_result.data.length ? (
				<>
					<div className='row'>
						{search_result.data &&
							search_result.data.map((track: any) => (
								<PerResult key={track.id} track={track} />
							))}
					</div>
					<div className='flex_container'>
						{search_result.prev && (
							<button
								className='btn'
								onClick={() => dispatch(fetchNext(search_result.prev))}>
								previous
							</button>
						)}

						{search_result.next && (
							<button className='btn' onClick={handleNextFetch}>
								next
							</button>
						)}
					</div>
				</>
			) : (
				<div className='d-flex'>
					<div className='spinner-border mx-auto mt-5' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResultPage;
