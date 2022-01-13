import { useCallback } from 'react';
import { POSTS_TYPE } from '../../../redux/users/posts/actions';
import { useDispatch } from 'react-redux';
import { api } from '../../../api';

export const useGetPosts = () => {
  const dispatch = useDispatch();

  return useCallback(async () => {
    try {
      const postModel = await api.getPosts();

      if (postModel) {
        dispatch({
          type: POSTS_TYPE.SET_POSTS,
          payload: postModel
        });
      }
    }
    catch {
      console.log('Some error');
    }

  }, []);
};