import { useCallback } from 'react';
import { POSTS_TYPE } from '../../../redux/users/posts/actions';
import { useDispatch } from 'react-redux';
import { api } from '../../../api';
import { usePreloaderContext } from '../../preloader/PreloaderContext';
import { useNotificationContext } from '../../notification/NotificationContext';

export const useGetPosts = () => {
  const dispatch = useDispatch();
  const { setLoading } = usePreloaderContext();
  const { setErrors, setSuccess } = useNotificationContext();

  return useCallback(async () => {
    try {
      setLoading(isLoading => !isLoading);
      const postModel = await api.getPosts();
      if (postModel) {
        dispatch({
          type: POSTS_TYPE.SET_POSTS,
          payload: postModel
        });
        setSuccess('Posts successful uploaded!');
      }
    } catch (e: any) {
      setErrors(e.message);
    } finally {
      setLoading(isLoading => !isLoading);
    }
  }, []);
};