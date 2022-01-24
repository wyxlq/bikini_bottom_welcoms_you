import Interview from '@/views/App/Question/Interview/Interview';
import WrittenExamination from '@/views/App/Question/WrittenExamination/WrittenExamination';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'written-examination',
    title: '笔试题',
    Component: WrittenExamination,
  },
  {
    path: 'interview',
    title: '面试题',
    Component: Interview,
  },
];

export default routes;
