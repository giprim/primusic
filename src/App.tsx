import React, { useState } from 'react';
import './App.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import 'animate.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ResultPage from './components/resultPage';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Searchbar: React.FC = () => {
	const [query, setQuery] = useState('');
	const handlerSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const searchInputEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const Form: HTMLCollectionOf<HTMLFormElement> = document.forms;
		const searchform = Form[0].name === 'searchForm' ? Form[0] : null;
		if (event.keyCode === 13 && query !== '') searchform?.submit();
	};

	return (
		<div className='gi_width_res'>
			<form onSubmit={handlerSearch} name='searchForm'>
				<Input
					size='large'
					prefix={<SearchOutlined className='searchIcon' />}
					placeholder='Search...'
					className='searchBar'
					type='Search'
					onKeyUp={searchInputEvent}
					onChange={e => setQuery(e.target.value)}
				/>
			</form>
		</div>
	);
};

function App() {
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
}

export default App;
