import { PayloadAction } from '../../types';
import { Post } from './reducer';

export enum POSTS_TYPE {
  SET_POSTS = 'SET_POSTS',
}

export type PostActionType = PayloadAction<POSTS_TYPE.SET_POSTS, Post>
