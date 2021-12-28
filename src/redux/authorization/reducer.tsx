import { AuthActionsType, AUTH_TYPE } from './actions';

export interface Auth {
	email: string;
	password: string;
	isAuth: boolean;
	userName: string;
	role: string;
}

export interface AuthState {
	auth: Auth;
}

const initialState = {
	auth: {
		email: '',
		password: '',
		userName: '',
		role: '',
		isAuth: false,
	},
};

export const authorization = (
	state: AuthState = initialState,
	action: AuthActionsType
): AuthState => {
	switch (action.type) {
		case AUTH_TYPE.SET_AUTH:
			return { ...state, auth: action.payload };
		default:
			return state;
	}
};

// dispatch({
// 	type: C.SET_INVESTORS_PROFILES,
// 	payload: investorsListResponse
//   })
