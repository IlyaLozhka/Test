import { useCallback } from 'react';
import { POSTS_TYPE } from '../../../redux/users/posts/actions';
import { useDispatch } from 'react-redux';

export const useGetPosts = () => {
  const dispatch = useDispatch()

  return useCallback(async () => {
    return await (
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((post) => dispatch({
          type: POSTS_TYPE.SET_POSTS,
          payload: post
        })));  }, []);
};