import App from '@/views/App/App';
import Login from '@/views/Login/Login';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'login',
    Component: Login,
  },
  {
    path: 'app/*',
    Component: App,
  },
];

export default routes;
