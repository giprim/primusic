import { Action } from 'redux';

export interface IArtist {
	data: [];
	next: string;
	prev: string;
	total: number;
	query: string;
	loaded: boolean;
}

export interface IActions extends Action {
	payload: any;
	query?: string;
	loaded: boolean;
}

export interface IThemeConfig {
	backgroundColor: string;
	textColor: string;
	titleColor: string;
	searchBarColor: string;
	shadowBox: string;
	border: string;
}

export interface ILoadState {
	loaded: boolean;
}
