import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { truncateText } from '../Functionalities/functionalities';
import fetchNext from '../redux/actions/fetchNext';
import {
	PlayCircleFilled,
	UnorderedListOutlined,
	AppstoreOutlined,
	ArrowUpOutlined,
} from '@ant-design/icons';
import { LOADING } from '../redux/types';

const pages: string[] = [];

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);
	// const [loaded, setLoaded] = useState(false);
	// const loaded = useSelector((state: any) => state.loaded);
	const dispatch = useDispatch();
	const [toggleList, setToggleList] = useState(true);
	const [pagination, setPagination] = useState(pages);
	const [tracks, setTracks] = useState(25);

	// useEffect(() => {
	// 	setLoaded(search_result.loaded);
	// }, []);
	// console.log(loaded);
	let loaded = search_result.loaded;
	console.log(search_result.loaded);

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
		setTracks((prev) => prev + search_result.data.length);
	};

	const changeListOrder = () => {
		setToggleList((prev) => !prev);
	};

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
								<PerResult key={track.id} track={track} />
							))}
					</div>
					<div className='flex_container py-5'>
						<button
							className={`btn_ ${search_result.prev ? 'show_' : 'hide_'}`}
							onClick={() => {
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
				<div className='d-flex'>
					<div className='spinner-border mx-auto mt-5' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			)}
			<a href='#top' className={`btn_ p_fixed ${loaded ? 'show_' : 'hide_'}`}>
				<ArrowUpOutlined />
			</a>
		</div>
	);
};

export default ResultPage;
