import React, { useState } from 'react';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ResultPage from './components/resultPage';
import Searchbar from './components/searchbar/searchbar';

const App: React.FC = (props: any) => {
	return (
		<Router>
			<div className='root'>
				<Navbar />
				<Searchbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<div className='noWallpaper'>
						<Route path='/result' component={ResultPage} />
					</div>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
