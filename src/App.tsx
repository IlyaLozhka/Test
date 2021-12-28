import React, { FC } from 'react';
import { Content } from './component/content/Content';


import { RoutesConfig } from './component/routesConfig/RoutesConfig';
import { HomePage } from './component/home/HomePage';
import { StartPage } from './component/startPage/startPage';
import { TransactionPage } from './component/transaction/TransactionPage';
import { UserPage } from './component/user/UserPage';

export const App:FC = () => {

const routes = [
  {
    path: '/home',
    element: <HomePage/>,
  },
  {
    path: '/user',
    element: <UserPage/>,
  },
  {
    path: '/transaction',
    element: <TransactionPage/>,
  },
  {
    path: '/',
    element: <StartPage/>,
  },
];

  return (
    <div>
      <Content>
        <RoutesConfig routes = {routes}/>
      </Content>
    </div>
  )
};