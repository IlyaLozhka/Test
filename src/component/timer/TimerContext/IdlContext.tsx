import React, { createContext, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH_TYPE } from '../../../redux/authorization/actions';
import { useIdle } from '../../shared/hooks/useIdle';
import { IdleModal } from '../IdleModal';

const IdleContext = createContext(null);

export const IdleProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { timer, resetUserTimer } = useIdle();

  useEffect(() => {
    if (!timer) setOpen(true);
  }, [timer, setOpen]);

  const stayLoggedIn = (): void => {
    resetUserTimer();
    setOpen(false);
  };

  const logOut = (): void => {
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
    setOpen(false);
  };

  return (
    <IdleContext.Provider value={null}>
      {children}
      {open && <IdleModal open={open} stayLoggedIn={() => stayLoggedIn()} logOff={() => logOut()} />}
    </IdleContext.Provider>
  );
};