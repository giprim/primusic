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
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
									ab atque vel assumenda, quisquam cupiditate laborum adipisci
									voluptatum dignissimos hic voluptas saepe eveniet officia
									harum animi neque perferendis tempora numquam!
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
