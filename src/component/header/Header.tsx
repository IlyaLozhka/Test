import React, { FunctionComponent, useCallback, useState } from 'react';
import style from './Header.module.css';
import { NavigationButton } from '../../utils/navigationButton/navigationButton';
import { IProps } from './HeaderContainer';
import { AuthorizationContainer } from '../modal/authorization/AuthorizationContainer';

export const Header: FunctionComponent<IProps> = ({ isAuth, setLogout, pages , logo}) => {

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


  return (
    <div className={style.headerWrapper}>
      {
        modalOpen && !isAuth ? <AuthorizationContainer onModalClose={onModalClose}/> : null
      }
      <div className={style.navigation}>

        <div className={style.logotype}>
          <img src={logo} alt='logotype' />
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
            ?  <div  className={style.logButton} onClick={onLogoutClick}> Logout</div>
            : <div className={style.logButton} onClick={onLoginClick}> Login</div>
        }
      </div>

    </div>
  );
};
