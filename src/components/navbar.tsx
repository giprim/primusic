import React, { useState } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import ThemeBtn from '../assets/theme';
import Logo from '../assets/logo';
import { MenuOutlined } from '@ant-design/icons';
import Searchbar from './searchbar/searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { THEME } from '../redux/types';
import Theme from '../themeConfig/theme';

const Navbar: React.FC = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const isDark: boolean = useSelector((state: any) => state.theme);

	const themeToggler = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.preventDefault();

		dispatch({
			type: THEME,
			payload: !isDark,
		});

		// Theme(false);
	};

	return (
		<nav className='navbar navbar-expand-md bg-dark navbar-dark sticky-top'>
			<div className='container'>
				<Link to='/' className='navbar-brand mr-3' href='#'>
					<Logo />
				</Link>

				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavbar'>
					<MenuOutlined className='icon' />
				</button>
				{location.pathname !== '/' && <Searchbar />}
				<div className='collapse navbar-collapse' id='collapsibleNavbar'>
					<ul className='navbar-nav ml-auto'>
						<button
							onClick={themeToggler}
							style={{ background: 'transparent', border: 'none' }}>
							<ThemeBtn />
						</button>
						<NavLink to='/' className='nav-item nav-link darkLink'>
							Blog
						</NavLink>
						<NavLink to='/' className='nav-item nav-link darkLink'>
							About
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

// if (bgLight) {
// 	document.documentElement.style.setProperty('--bgColor', '#212121');

// 	document.documentElement.style.setProperty(
// 		'--lightBgFontColor',
// 		'#10bdca'
// 	);
// 	document.documentElement.style.setProperty('--colorTxt', '#efefef');

// 	document.documentElement.style.setProperty(
// 		'--searchBarBg',
// 		'rgba(48,69,99,0.5)'
// 	);
// 	setBgLight(prev => !prev);
// } else {
// 	document.documentElement.style.setProperty(
// 		'--lightBgFontColor',
// 		'#1b4f51'
// 	);
// 	document.documentElement.style.setProperty('--searchBarBg', '#fff');
// 	document.documentElement.style.setProperty('--bgColor', 'white');
// 	document.documentElement.style.setProperty('--colorTxt', '');

// 	setBgLight(prev => !prev);
// }
