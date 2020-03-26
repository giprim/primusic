import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeBtn from '../assets/theme';
import Logo from '../assets/logo';
import { MenuOutlined } from '@ant-design/icons';

const themeColors = {
	backgroundCol: 'white',
	fontCol: '#1b4f51',
	textCol: 'white',
	searchBarCol: 'white'
};

const Navbar: React.FC = () => {
	const [bgLight, setBgLight] = useState(true);
	const [bgColor, setBgColor] = useState(themeColors.backgroundCol);
	const [fontCol, setFontCol] = useState(themeColors.fontCol);
	const [textCol, setTextCol] = useState(themeColors.textCol);
	const [searchCol, setSearchCol] = useState(themeColors.searchBarCol);

	// localstorage
	localStorage.setItem('bgcolor', bgColor);
	localStorage.setItem('fontcol', fontCol);
	localStorage.setItem('textcol', textCol);
	localStorage.setItem('searchcol', searchCol);

	localStorage.setItem('bgColor', '');
	const themeChanger = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		if (bgLight) {
			setBgColor('#212121');
			setFontCol('#10bdca');
			setTextCol('#efefef');
			setSearchCol('rgba(48,69,99,0.5)');

			setBgLight(prev => !prev);
		} else {
			setBgColor(themeColors.backgroundCol);
			setFontCol(themeColors.fontCol);
			setTextCol(themeColors.textCol);
			setSearchCol(themeColors.searchBarCol);

			setBgLight(prev => !prev);
		}
	};
	document.documentElement.style.setProperty(
		'--lightBgFontColor',
		localStorage.getItem('fontcol')
	);
	document.documentElement.style.setProperty(
		'--searchBarBg',
		localStorage.getItem('searchcol')
	);
	document.documentElement.style.setProperty(
		'--bgColor',
		localStorage.getItem('bgcolor')
	);
	document.documentElement.style.setProperty(
		'--colorTxt',
		localStorage.getItem('textcol')
	);

	return (
		<nav className='navbar navbar-expand-md bg-dark navbar-dark sticky-top'>
			<div className='container'>
				<Link to='/' className='navbar-brand' href='#'>
					<Logo />
				</Link>

				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavbar'>
					<MenuOutlined className='icon' />
				</button>

				<div className='collapse navbar-collapse' id='collapsibleNavbar'>
					<ul className='navbar-nav ml-auto'>
						<button
							onClick={themeChanger}
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
