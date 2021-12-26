import React, { FunctionComponent } from 'react';
import style from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../home/HomePage';
import { UserPage } from '../user/UserPage';
import { TransactionPage } from '../transaction/TransactionPage';
import { IProps } from './ContentContainer';
import { StartPage } from '../startPage/startPage';

const Content: FunctionComponent<IProps> = ({ isAuth }) => {

  const redirect = () => {
    if(!isAuth) {
      return <>
        <Route path={'/'} element={<StartPage />} />
      </>
    }
    return <>
      <Route path={'/home'} element={<HomePage />} />
      <Route path={'/user'} element={<UserPage />} />
      <Route path={'/transaction'} element={<TransactionPage />} />
    </>
  };

  return (
    <div className={style.contentWrapper}>
      <Routes>
        {redirect()}
      </Routes>
    </div>
  );
};

export default Content;
