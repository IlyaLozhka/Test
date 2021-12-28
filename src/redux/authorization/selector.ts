import { RootState } from '../rootReducer';
import { useSelector } from 'react-redux';
import { AuthState } from './reducer';

export const useAuth = (): AuthState =>
	useSelector((state: RootState) => state.authorization);
