import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { truncateText } from '../Functionalities/functionalities';

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);

	const PerResult = (tracks: any) => {
		const { track } = tracks;
		return (
			<div key={track.id} className='col-lg-3 p-3'>
				<div className='p-3 gi-box'>
					<img
						src={track.album.cover_big}
						className='img-fluid'
						alt={track.album.title}
					/>
					<h4 className='h3 text-center'>{truncateText(track.title)}</h4>
					<h6 className='text-center h6'>{track.artist.name}</h6>
				</div>
			</div>
		);
	};

	const array: any[] = [];

	for (let i = 0; i < search_result.data.length; i++) {
		array.push(search_result.data[i]);
	}
	const handleNextFetch = () => {
		console.log(search_result.next);
	};

	return (
		<div className='container'>
			{array.length ? (
				<>
					<div className='row'>
						{array &&
							array.map((track) => <PerResult key={track.id} track={track} />)}
					</div>
					<button onClick={handleNextFetch}>next</button>
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
