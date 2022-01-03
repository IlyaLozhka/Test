import { PostActionType, POSTS_TYPE } from './actions';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Array<Post>;
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