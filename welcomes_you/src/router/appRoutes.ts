import Location from '@/views/App/Location/Location';
import Question from '@/views/App/Question/Question';

import questionRoutes from './questionRoutes';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'location',
    title: '比奇堡',
    Component: Location,
  },
  {
    path: 'question',
    title: '题库',
    Component: Question,
    routes: questionRoutes,
  },
];

export default routes;
