import { combineReducers, createStore } from 'redux';
import authorizationReducer from './authorizationReducer/authorizationReducer';

const reducers = combineReducers({
	authorizationReducer: authorizationReducer,
});

let store = createStore(reducers);

export default store;
