import { PayloadAction } from '../types';
import { Auth } from './reducer';

export enum AUTH_TYPE {
	SET_AUTH = 'SET_AUTH',
}

export type AuthActionsType = PayloadAction<AUTH_TYPE.SET_AUTH, Auth>;
