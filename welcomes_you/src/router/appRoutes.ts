import Location from '@/views/App/Location/Location';
import Question from '@/views/App/Question/Question';
import questionRoutes from './questionRoutes';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    title: '比奇堡',
    path: 'location',
    Component: Location,
  },
  {
    title: '题库',
    path: 'question',
    Component: Question,
    routes: questionRoutes,
  },
];

export default routes;
