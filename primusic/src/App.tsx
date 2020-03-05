import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Searchbar from './components/searchbar';

const { Header } = Layout;

function App() {
	return (
		<Router>
			<Layout className='root'>
				<Navbar />
				<Searchbar />
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
