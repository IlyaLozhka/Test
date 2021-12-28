import { combineReducers } from 'redux';
import { authorization } from './authorization/reducer';

const rootReducer = combineReducers({
	authorization,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
