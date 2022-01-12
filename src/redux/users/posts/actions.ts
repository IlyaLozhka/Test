import { PayloadAction } from '../../types';
import { PostModel } from '../../../api/entities/post';

export enum POSTS_TYPE {
  SET_POSTS = 'SET_POSTS',
}

export type PostActionType = PayloadAction<POSTS_TYPE.SET_POSTS, PostModel>
