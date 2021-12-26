import { types } from './actionTypes';
import { IAction } from './types';

export const setAuth = (value: boolean): IAction => {
	return {
		type: types.SET_AUTH,
		payload: value,
	};
};
