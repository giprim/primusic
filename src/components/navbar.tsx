import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ThemeBtn from '../assets/theme';
import Logo from '../assets/logo';
import { MenuOutlined } from '@ant-design/icons';
import Searchbar from './searchbar/searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { THEME } from '../redux/types';
import { darkThemeConfig, lightThemeConfig } from '../themeConfig/themeConfig';
import setTheme from '../themeConfig/setTheme';

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
		isDark ? setTheme(lightThemeConfig) : setTheme(darkThemeConfig);
	};

	return (
		<nav
			className={`navbar navbar-expand-md bg-dark navbar-dark ${
				location.pathname !== '/' ? 'fixed-top' : 'sticky-top'
			}`}>
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
