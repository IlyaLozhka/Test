import { HomePage } from './home/HomePage';
import { UserPage } from './user/UserPage';
import { PostsPage } from './posts/PostsPage';
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
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/',
    component: StartPage,
  },
];