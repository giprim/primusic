import React, { useState, useEffect } from 'react';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ResultPage from './components/resultPage';
import { useSelector } from 'react-redux';
import Theme from './themeConfig/theme';

const App: React.FC = () => {
	return (
		<Router>
			<div className='root'>
				<Navbar />
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
