import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import { GenericAction } from './types';

const logger = () => (next: any) => (action: GenericAction) => {
	const result = next(action);
	return result;
};

const store = createStore(
	rootReducer,
	compose(
		process.env.NODE_ENV === 'development'
			? applyMiddleware(logger)
			: applyMiddleware()
	)
);

export default store;
