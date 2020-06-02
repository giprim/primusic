import { Action } from 'redux';

export interface IArtist {
	data: [];
	next: string;
	prev: string;
	total: number;
	query: string;
}

export interface IActions extends Action {
	payload: any;
	query?: string;
}

export interface IThemeConfig {
	backgroundColor: string;
	textColor: string;
	titleColor: string;
	searchBarColor: string;
	shadowBox: string;
	border: string;
}
