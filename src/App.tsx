import React from 'react';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ResultPage from './components/resultPage';

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
