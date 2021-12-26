import { IAuthReducer } from './authorizationReducer/types';

export interface IStore {
	readonly authorizationReducer: IAuthReducer;
}
