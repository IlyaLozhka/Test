import { types } from './action-types';
import { IAction } from './types';

export const setAuth = (value: boolean): IAction => {
	return {
		type: types.SET_AUTH,
		payload: value,
	};
};
