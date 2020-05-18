import { Action } from 'redux';

export interface IArtist {
	data: [];
	next: string;
	prev: string;
	total: number;
}

export interface IActions extends Action {
	payload: any;
}

export interface IThemeConfig {
	backgroundColor: string;
	textColor: string;
	titleColor: string;
	searchBarColor: string;
	shadowBox: string;
	border: string;
}
