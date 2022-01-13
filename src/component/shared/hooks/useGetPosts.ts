import { useCallback } from 'react';
import { POSTS_TYPE } from '../../../redux/users/posts/actions';
import { useDispatch } from 'react-redux';
import { api } from '../../../api';
import { usePreloaderContext } from '../../preloader/PreloaderContext';

export const useGetPosts = () => {
  const dispatch = useDispatch();
  const { setLoading } = usePreloaderContext();


  return useCallback(async () => {
    try {
      setLoading(isLoading => !isLoading);
      const postModel = await api.getPosts();

      if (postModel) {
        dispatch({
          type: POSTS_TYPE.SET_POSTS,
          payload: postModel
        });
      }
    } catch {
      console.log('Some error');
    } finally {
      setLoading(isLoading => !isLoading);
    }

  }, []);
};