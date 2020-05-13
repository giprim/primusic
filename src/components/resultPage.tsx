import React from 'react';
import { useSelector } from 'react-redux';

const ResultPage = () => {
	const search_result = useSelector((state: any) => state.search);

	const PerResult = (tracks: any) => {
		const { track } = tracks;
		return (
			<div key={track.id} className='col-lg-3 p-3'>
				<div className='bg-light p-3'>
					<img
						src={track.album.cover_big}
						className='img-fluid'
						alt={track.album.title}
					/>
					<h4 className='h3 text-center'>{track.title}</h4>
					<h6 className='text-center h6'>{track.artist.name}</h6>
				</div>
			</div>
		);
	};

	const array: any[] = [];

	for (let i = 0; i < search_result.data.length; i++) {
		array.push(search_result.data[i]);
	}
	console.log(search_result);
	const handleNextFetch = () => {
		console.log(search_result.next);
	};

	return (
		<div className='container'>
			<div className='row'>
				{array &&
					array.map((track) => <PerResult key={track.id} track={track} />)}
			</div>
			<button onClick={handleNextFetch}>next</button>
		</div>
	);
};

export default ResultPage;
