import { HomePage } from './home/HomePage';
import { UserPage } from './user/UserPage';
import { TransactionPage } from './transaction/TransactionPage';
import { StartPage } from './startPage/startPage';

export const routes = [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/user',
    component: UserPage,
  },
  {
    path: '/transaction',
    component: TransactionPage,
  },
  {
    path: '/',
    component: StartPage,
  },
];