import React from 'react';

const ResultPage = () => {
	const PerResult = (track: {}) => {
		return (
			<div className='col-lg-3 p-3'>
				<div className='bg-light p-3'>
					<img
						src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-restaurant-waiter-male-suit-png-image_1267605.jpg'
						className='img-fluid'
						alt='album name'
					/>

					<h4 className='h3 text-center'>Lose Yourself</h4>
					<h6 className='text-center h6'>eminem</h6>
				</div>
			</div>
		);
	};

	const testArray = [
		{ you: 'you' },
		{ you: 'you' },
		{ you: 'you' },
		{ you: 'you' },
		{ you: 'you' },
		{ you: 'you' },
		{ you: 'you' }
	];
	return (
		<div className='container'>
			<div className='row'>{testArray.map(track => PerResult(track))}</div>;
		</div>
	);
};

export default ResultPage;
