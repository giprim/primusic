import React from 'react';
import Person from '../assets/Person';
import Note from '../assets/Note';
import Searchbar from './searchbar/searchbar';
import { RouteComponentProps } from 'react-router-dom';

const Home: React.FC<RouteComponentProps> = ({ history }) => {
	return (
		<div className='relative'>
			{/* <Searchbar history={history} /> */}
			<Searchbar />

			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-3'>
						<div className='pt-lg-5 mt-lg-5'>
							<Person />
						</div>
					</div>
					<div className='col-md-6'>
						<div className='pad'>
							<h2 className='title py-md-5 mt-5'>Explore</h2>
							<div className='line'></div>
							<section className='py-2'>
								<p className='txt'>
									Welcome to primusic - here you can search for music and have a
									preview. Just type in your search query, be it a song title,
									artist name or album and get your search result in seconds.
									Have fun!
								</p>
							</section>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='bounceInDown'>
							<Note />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
