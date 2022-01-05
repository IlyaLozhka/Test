import { RootState } from '../rootReducer';
import { useSelector } from 'react-redux';
import { DirectionState } from './reducer';

export const useSortDirection = (): DirectionState =>
  useSelector((state: RootState) => state.sortDirection);
