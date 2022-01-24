import App from '@/views/App/App';
import Login from '@/views/Login/Login';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'login',
    title: '登录',
    Component: Login,
  },
  {
    path: 'app/*',
    title: 'App',
    Component: App,
  },
];

export default routes;
