import React, { useState } from 'react';

const themeColors = {
	backgroundCol: 'white',
	fontCol: '#1b4f51',
	textCol: 'white',
	searchBarCol: 'white',
};

const Theme = (isDark: boolean) => {
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

	if (isDark) {
		setBgColor('#212121');
		setFontCol('#10bdca');
		setTextCol('#efefef');
		setSearchCol('rgba(48,69,99,0.5)');
	} else {
		setBgColor(themeColors.backgroundCol);
		setFontCol(themeColors.fontCol);
		setTextCol(themeColors.textCol);
		setSearchCol(themeColors.searchBarCol);
	}

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
};

export default Theme;
