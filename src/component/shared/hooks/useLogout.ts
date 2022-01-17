import { AUTH_TYPE } from '../../../redux/authorization/actions';
import { useDispatch } from 'react-redux';

export const useLogout = () => {
  const dispatch = useDispatch();
  return dispatch({
    type: AUTH_TYPE.SET_AUTH,
    payload: {
      email: '',
      password: '',
      userName: '',
      role: '',
      isAuth: false
    }
  });
};