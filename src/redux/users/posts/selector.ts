import { PostState } from './reducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../rootReducer';

export const usePosts = ():PostState =>
  useSelector( (state:RootState) => state.posts)