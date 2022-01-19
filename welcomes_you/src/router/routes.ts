import App from '@/views/App/App';
import Login from '@/views/Login/Login';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    title: '登录',
    path: 'login',
    Component: Login,
  },
  {
    title: 'App',
    path: 'app/*',
    Component: App,
  },
];

export default routes;
