export interface IAuthReducer {
	readonly isAuth: boolean;
}

export interface IAction {
	readonly type: string;
	readonly payload: boolean;
}
