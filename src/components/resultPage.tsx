import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { truncateText } from '../Functionalities/functionalities';
import fetchNext from '../redux/actions/fetchNext';
import { PlayCircleFilled } from '@ant-design/icons';

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);
	const dispatch = useDispatch();

	const PerResult = (tracks: any) => {
		const { track } = tracks;
		return (
			// <Link to={`/result/${track.id}`}
			<div key={track.id} className='col-lg-3 p-3'>
				<div className='p-3 gi-box'>
					<img
						src={track.album.cover_big}
						className='img-fluid'
						alt={track.album.title}
					/>
					<h4 className='h3 text-center'>{truncateText(track.title)}</h4>
					<h6 className='text-center h6'>{track.artist.name}</h6>
					<div className='d-flex'>
						<audio controls className='gi-audio' src={track.preview}>
							<PlayCircleFilled />
						</audio>
					</div>
				</div>
			</div>
		);
	};

	const handleNextFetch = (url: string) => {
		dispatch(fetchNext(url));
	};

	return (
		<div className='container mt-5 pt-5'>
			{search_result.data.length ? (
				<>
					<div className='row'>
						{search_result.data &&
							search_result.data.map((track: any) => (
								<PerResult key={track.id} track={track} />
							))}
					</div>
					{search_result.prev !== '' && (
						<button
							className='btn'
							onClick={() => handleNextFetch(search_result.prev)}>
							previous
						</button>
					)}

					{search_result.next !== '' && (
						<button
							className='btn'
							onClick={() => handleNextFetch(search_result.next)}>
							next
						</button>
					)}
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
