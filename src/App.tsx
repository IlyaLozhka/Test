import React, { FC } from 'react';
import { Content } from './component/content/Content';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './component/home/HomePage';
import { UserPage } from './component/user/UserPage';
import { TransactionPage } from './component/transaction/TransactionPage';
import { StartPage } from './component/startPage/startPage';


export const App:FC = () => {

  const routeConfig = {
    path: '/home',
    element: HomePage,
  };

  return (
    <div>
      <Content>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/transactions' element={<TransactionPage />} />
          <Route path='/' element={<StartPage />} />
        </Routes>
      </Content>
    </div>
  )
};