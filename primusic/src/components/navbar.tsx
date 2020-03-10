import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeBtn from '../assets/theme';
import Logo from '../assets/logo';
import { MenuOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
	const [bgLight, setBgLight] = useState(true);

	const themeChanger = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void => {
		if (bgLight) {
			document.documentElement.style.setProperty('--bgColor', '#212121');
			setBgLight(prev => !prev);
		} else {
			document.documentElement.style.setProperty('--bgColor', 'white');
			setBgLight(prev => !prev);
		}
	};

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
