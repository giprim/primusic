import React from 'react';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Searchbar from './components/searchbar';
import ResultPage from './components/resultPage';

function App() {
	return (
		<Router>
			<div className='root'>
				<Navbar />
				<Searchbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/result' component={ResultPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
