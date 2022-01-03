import { combineReducers } from 'redux';
import { authorization } from './authorization/reducer';
import { posts } from './users/posts/reducer';

const rootReducer = combineReducers({
	authorization,
	posts
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
