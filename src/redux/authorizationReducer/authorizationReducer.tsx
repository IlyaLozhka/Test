import { IAction, IAuthReducer } from './types';
import { types } from './action-types';
const initialState: IAuthReducer = {
	isAuth: false,
};

const authorizationReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case types.SET_AUTH:
			return { ...state, isAuth: action.payload };
		default:
			return state;
	}
};

export default authorizationReducer;
