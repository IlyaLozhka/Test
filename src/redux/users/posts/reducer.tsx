import { PostActionType, POSTS_TYPE } from './actions';
import { PostModel } from '../../../api/entities/post';


export interface PostState {
  posts: PostModel[];
}

const initialState = {
  posts: []
};

export const posts = (
  state: PostState = initialState,
  action: PostActionType) => {
  switch (action.type) {
    case POSTS_TYPE.SET_POSTS:
      return {
        ...state, posts: action.payload
      };
    default:
      return state;
  }
};