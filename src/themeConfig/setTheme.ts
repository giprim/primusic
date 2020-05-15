import { IThemeConfig } from '../interfaces';

export default (config: IThemeConfig) => {
	//! Local Storage Settings
	localStorage.setItem('backgroundColor', config.backgroundColor);
	localStorage.setItem('titleColor', config.titleColor);
	localStorage.setItem('textColor', config.textColor);
	localStorage.setItem('searchBarColor', config.searchBarColor);
	localStorage.setItem('border', config.border);
	localStorage.setItem('shadowBox', config.shadowBox);

	//! CSS Property Settings
	document.documentElement.style.setProperty(
		'--titleColor',
		localStorage.getItem('titleColor')
	);
	document.documentElement.style.setProperty(
		'--searchBarColor',
		localStorage.getItem('searchBarColor')
	);
	document.documentElement.style.setProperty(
		'--backgroundColor',
		localStorage.getItem('backgroundColor')
	);
	document.documentElement.style.setProperty(
		'--textColor',
		localStorage.getItem('textColor')
	);
	document.documentElement.style.setProperty(
		'--border',
		localStorage.getItem('border')
	);
	document.documentElement.style.setProperty(
		'--shadowBox',
		localStorage.getItem('shadowBox')
	);
};
