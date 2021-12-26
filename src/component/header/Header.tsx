import React, { FunctionComponent, useCallback, useState } from 'react';
import style from './Header.module.css';
import { NavigationButton } from '../../utils/navigationButton/navigationButton';
import { IProps } from './HeaderContainer';
import { AuthorizationContainer } from '../modal/authorization/AuthorizationContainer';

export const Header: FunctionComponent<IProps> = ({ isAuth, setLogout }) => {
  const [modalOpen, setModal] = useState<boolean>(false);

  const onLoginClick = () => {
    setModal(true);
  };

  const onLogoutClick = () => {
    setLogout(false);
    setModal(false);
  };

  const onModalClose = useCallback(() => {
    setModal(false)
  },[setModal])

  const pages = [
    { path: 'home', title: 'Home' },
    { path: 'user', title: 'User' },
    { path: 'transaction', title: 'Transaction' }
  ];

  return (
    <div className={style.headerWrapper}>
      {
        modalOpen && !isAuth ? <AuthorizationContainer onModalClose={onModalClose}/> : null
      }
      <div className={style.navigation}>

        <div>
          LOGO
        </div>

        {
          isAuth
            ? <div className={style.navigationButtonWrapper}>
              {pages.map((element) => {
                return (
                  <NavigationButton
                    key={element.title}
                    path={element.path}
                    title={element.title}
                  />
                );
              })}
            </div>
            : null
        }
      </div>

      <div>
        {
          isAuth
            ?  <button onClick={onLogoutClick}> Logout</button>
            : <button onClick={onLoginClick}> Login</button>
        }
      </div>

    </div>
  );
};
