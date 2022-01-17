import React, { FC, useState, ReactNode } from 'react';
import style from './Header.module.css';
import { Authorization } from '../authorization/Authorization';
import { useAuth } from '../../redux/authorization/selector';
import { HomeButton } from '../../component/buttons/navigationButtons/home/HomeButton';
import { UserButton } from '../../component/buttons/navigationButtons/user/UserButton';
import { PostsButton } from '../../component/buttons/navigationButtons/posts/PostsButton';
import { useDispatch } from 'react-redux';
import { AUTH_TYPE } from '../../redux/authorization/actions';
import { ModalContainer } from '../../component/modal/ModalContainer';
import { LoginButton } from '../../component/buttons/LoginButton';

export interface HeaderProps {
  logo: ReactNode;
}

export const Header: FC<HeaderProps> = ({ logo }) => {
  const { auth } = useAuth();
  const dispatch = useDispatch();

  const [loginModalOpen, setLoginModal] = useState<boolean>(false);

  const login = () => setLoginModal(true);
  const logout = () => {
    setLoginModal(false);
    dispatch({
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

  const closeModal = () => setLoginModal(false);

  return (
    <div className={style.headerWrapper}>

      {loginModalOpen && !auth.isAuth ? (
        <ModalContainer component={<Authorization closeModal={() => closeModal()} />} />
      ) : null}

      <div className={style.navigation}>
        <div className={style.logotype}>{logo}</div>
        {auth.isAuth ? (
          <div className={style.navigationButtonWrapper}>
            <HomeButton />
            <UserButton />
            <PostsButton />
          </div>
        ) : null}
      </div>
      <div>
        {auth.isAuth
          ? <LoginButton handleClick={logout} label={'Logout'} />
          : <LoginButton handleClick={login} label={'Login'} />
        }
      </div>
    </div>
  );
};
