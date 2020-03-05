import React from 'react';

function Logo() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='115'
			height='28'
			fill='none'
			viewBox='0 0 76 18'>
			<g fill='#1E4244'>
				<text
					xmlSpace='preserve'
					style={{ whiteSpace: 'pre' }}
					fontFamily='Rounded Mplus 1c Bold'
					fontSize='12'
					fontWeight='bold'
					letterSpacing='0em'>
					<tspan x='13' y='13.53'>
						primusic
					</tspan>
				</text>
				<path d='M11 5.75H3.621c.08-.246.119-.503.117-.762C3.738 3.891 2.962 3 1.865 3S0 3.891 0 4.988s.808 1.994 1.98 1.994h5.124v5.786H3.621c.08-.246.119-.503.117-.762 0-1.097-.776-1.988-1.873-1.988S0 10.91 0 12.006C0 13.104.808 14 1.98 14H11V5.75zm-2.75 7.018V6.982h1.518v5.786H8.25z'></path>
				<path d='M65 14.25h7.379c-.08.246-.119.503-.118.762 0 1.097.777 1.988 1.874 1.988S76 16.109 76 15.012s-.808-1.994-1.98-1.994h-5.124V7.232h3.483c-.08.246-.119.503-.118.762 0 1.097.777 1.988 1.874 1.988S76 9.09 76 7.994 75.192 6 74.02 6H65v8.25zm2.75-7.018v5.786h-1.518V7.232h1.518z'></path>
			</g>
		</svg>
	);
}

export default Logo;
