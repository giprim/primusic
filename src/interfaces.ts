import { Action } from 'redux';

export interface IArtist {
	data: {};
	next: string;
	total: number;
}

export interface IActions extends Action {
	payload: any;
}
