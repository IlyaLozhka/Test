import React, { FC } from 'react';
import { Content } from './views/content/Content';


import { RoutesConfig } from './component/routesConfig/RoutesConfig';
import { HomePage } from './views/home/HomePage';
import { StartPage } from './views/startPage/startPage';
import { TransactionPage } from './views/transaction/TransactionPage';
import { UserPage } from './views/user/UserPage';

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