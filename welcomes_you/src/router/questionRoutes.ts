import Interview from '@/views/App/Question/Interview/Interview';
import WrittenExamination from '@/views/App/Question/WrittenExamination/WrittenExamination';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    title: '笔试题',
    path: 'written-examination',
    Component: WrittenExamination,
  },
  {
    title: '面试题',
    path: 'interview',
    Component: Interview,
  },
];

export default routes;
